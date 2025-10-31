export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({ ok: true })
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' })
  }

  const endpoint = "https://script.google.com/macros/s/AKfycbyTFQZY4gZv_DzrG06jVlmQ-yZxia-LkswXTY8NOllPGtgK-REAaXcGGUh0f1yWhrNpFg/exec"
  try {
    // Gửi dạng form-urlencoded để tương thích Apps Script
    const params = new URLSearchParams()
    const b = req.body || {}
    params.set('name', b.name || '')
    params.set('email', b.email || '')
    params.set('phone', b.phone || '')
    params.set('message', b.message || '')
    params.set('company', b.company || '')
    params.set('service', b.service || '')

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      body: params.toString(),
    })

    const text = await response.text()
    let data
    try { data = JSON.parse(text) } catch { data = null }
    if (!response.ok || (data && data.success === false)) {
      const message = (data && (data.error || data.message)) || `Upstream error: ${response.status}`
      return res.status(502).json({ success: false, error: message, upstreamStatus: response.status, upstreamBody: data || text })
    }

    return res.status(200).json({ success: true, data: data || text })
  } catch (err) {
    return res.status(500).json({ success: false, error: String(err?.message || err) })
  }
}


