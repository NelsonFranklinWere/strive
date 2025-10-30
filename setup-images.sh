#!/bin/bash

# Script to organize images into public folder structure
# Run this from the project root directory

echo "Creating public folder structure..."

# Create directories
mkdir -p public/images/{logo,clients,team,products,testimonials,about}
mkdir -p public/videos

echo "Moving images..."

# Logo
if [ -f "logo.jpeg" ]; then
  mv logo.jpeg public/images/logo/logo.jpeg
  echo "✓ Moved logo.jpeg"
fi

# Clients
[ -f "rana.jpg" ] && mv rana.jpg public/images/clients/rana.jpg && echo "✓ Moved rana.jpg"
[ -f "yahya.jpg" ] && mv yahya.jpg public/images/clients/yahya.jpg && echo "✓ Moved yahya.jpg"
[ -f "bulkstream.jpg" ] && mv bulkstream.jpg public/images/clients/bulkstream.jpg && echo "✓ Moved bulkstream.jpg"
[ -f "grainbulk.jpg" ] && mv grainbulk.jpg public/images/clients/grainbulk.jpg && echo "✓ Moved grainbulk.jpg"
[ -f "epza.jpg" ] && mv epza.jpg public/images/clients/epza.jpg && echo "✓ Moved epza.jpg"
[ -f "lastybusiness.jpg" ] && mv lastybusiness.jpg public/images/clients/lastybusiness.jpg && echo "✓ Moved lastybusiness.jpg"

# Team
[ -f "prof.jpg" ] && mv prof.jpg public/images/team/nelson-frank.jpg && echo "✓ Moved prof.jpg → nelson-frank.jpg"
[ -f "Laura.jpg" ] && mv Laura.jpg public/images/team/laura-nyaaga.jpg && echo "✓ Moved Laura.jpg → laura-nyaaga.jpg"
[ -f "fidel.jpg" ] && mv fidel.jpg public/images/team/fidel-ochieng.jpg && echo "✓ Moved fidel.jpg → fidel-ochieng.jpg"
[ -f "kiptoo.jpg" ] && mv kiptoo.jpg public/images/team/caleb-kiptoo.jpg && echo "✓ Moved kiptoo.jpg → caleb-kiptoo.jpg"

# Products
[ -f "B2Bsales.jpg" ] && mv B2Bsales.jpg public/images/products/b2b-sales.jpg && echo "✓ Moved B2Bsales.jpg → b2b-sales.jpg"
[ -f "cybersec.jpg" ] && mv cybersec.jpg public/images/products/cybersec.jpg && echo "✓ Moved cybersec.jpg"
[ -f "edutech.png" ] && mv edutech.png public/images/products/edutech.png && echo "✓ Moved edutech.png"

# Testimonials
[ -f "john.jpg" ] && mv john.jpg public/images/testimonials/john.jpg && echo "✓ Moved john.jpg"

# About
[ -f "vision.png" ] && mv vision.png public/images/about/vision.png && echo "✓ Moved vision.png"

# Videos
[ -f "herovideo.mp4" ] && mv herovideo.mp4 public/videos/herovideo.mp4 && echo "✓ Moved herovideo.mp4"

echo ""
echo "✅ Image organization complete!"
echo ""
echo "Note: Some images may be missing (smarthire.jpg, mental-health.jpg, gigaform.jpg, mary.jpg, paul.jpg)"
echo "You'll need to add these manually to their respective folders when available."

