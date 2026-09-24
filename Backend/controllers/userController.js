export function getMe(req, res) {
  res.json({
    id: req.user.id,
    email: req.user.email,
    provider: req.user.app_metadata?.provider,
    metadata: req.user.user_metadata,
  });
}