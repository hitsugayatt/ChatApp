import { useEffect, useRef } from "react"

const BackgroundAnimation = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const particleCount = 100

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
      })
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "rgba(6, 182, 212, 0.5)"
      ctx.beginPath()
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i]
        ctx.moveTo(p.x, p.y)
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, true)
      }
      ctx.fill()
      moveParticles()
    }

    function moveParticles() {
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i]
        p.x += p.dx
        p.y += p.dy

        if (p.x < 0 || p.x > canvas.width) p.dx = -p.dx
        if (p.y < 0 || p.y > canvas.height) p.dy = -p.dy
      }
    }

    function animate() {
      drawParticles()
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />
}

export default BackgroundAnimation

