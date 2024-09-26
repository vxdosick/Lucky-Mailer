import { NextResponse } from "next/server";

export async function GET(req: Request) {
    return NextResponse.json([
      {
        id: 1, 
        title: "Mail 1", 
        text: "lorem some text info about mt mails products",
        image: "/images/mails-image/1.png",
        price: "Free",
        free: true,
        code: `<mjml>
  <mj-body background-color="#e0f7fa" padding="0px">
    
    <!-- Header -->
    <mj-section background-color="#E6A1D9" padding="20px 0">
      <mj-column>
        <mj-image width="200px" src="https://via.placeholder.com/200x80?text=LOGO" alt="Company Logo" />
        <mj-text align="center" color="#ffffff" font-size="24px" font-weight="bold" font-family="Arial, sans-serif">
          Welcome to our new product!
        </mj-text>
      </mj-column>
    </mj-section>

    <!-- Hero Section -->
    <mj-section background-color="#FFE5FA" padding="40px 0">
      <mj-column>
        <mj-image width="300px" src="https://via.placeholder.com/300x200" alt="Product Image" />
        <mj-text align="center" color="#333333" font-size="20px" font-family="Arial, sans-serif">
          Presenting an innovative product that will change your future!
        </mj-text>
        <mj-text align="center" color="#555555" font-size="16px" font-family="Arial, sans-serif">
          Our product is designed using the latest technologies to make your life easier and more productive.
        </mj-text>
        <mj-button background-color="#E75D5D" color="#ffffff" font-size="16px" padding="15px 30px" border-radius="5px" font-family="Arial, sans-serif" href="#">
          Learn More
        </mj-button>
      </mj-column>
    </mj-section>

    <!-- Features Section -->
    <mj-section background-color="#e0f7fa" padding="20px 0">
      <mj-column width="33%">
        <mj-image width="100px" src="https://via.placeholder.com/100" alt="Feature 1" />
        <mj-text align="center" color="#0288d1" font-size="18px" font-weight="bold" font-family="Arial, sans-serif">
          Convenience
        </mj-text>
        <mj-text align="center" color="#555555" font-size="14px" font-family="Arial, sans-serif">
          Easily integrates with any system.
        </mj-text>
      </mj-column>
      <mj-column width="33%">
        <mj-image width="100px" src="https://via.placeholder.com/100" alt="Feature 2" />
        <mj-text align="center" color="#0288d1" font-size="18px" font-weight="bold" font-family="Arial, sans-serif">
          Speed
        </mj-text>
        <mj-text align="center" color="#555555" font-size="14px" font-family="Arial, sans-serif">
          High performance with instant response.
        </mj-text>
      </mj-column>
      <mj-column width="33%">
        <mj-image width="100px" src="https://via.placeholder.com/100" alt="Feature 3" />
        <mj-text align="center" color="#0288d1" font-size="18px" font-weight="bold" font-family="Arial, sans-serif">
          Reliability
        </mj-text>
        <mj-text align="center" color="#555555" font-size="14px" font-family="Arial, sans-serif">
          Your data is fully secure.
        </mj-text>
      </mj-column>
    </mj-section>

    <!-- Call to Action Section -->
    <mj-section background-color="#ffffff" padding="30px 0">
      <mj-column>
        <mj-text align="center" color="#333333" font-size="20px" font-weight="bold" font-family="Arial, sans-serif">
          Ready to get started?
        </mj-text>
        <mj-button background-color="#9737D5" color="#ffffff" font-size="16px" padding="15px 30px" border-radius="5px" font-family="Arial, sans-serif" href="#">
          Order Now
        </mj-button>
      </mj-column>
    </mj-section>

    <!-- Footer Section -->
    <mj-section background-color="#E6A1D9" padding="20px 0">
      <mj-column>
        <mj-text align="center" color="#ffffff" font-size="14px" font-family="Arial, sans-serif">
          © 2024 Your Company. All rights reserved.
        </mj-text>
        <mj-text align="center" color="#ffffff" font-size="12px" font-family="Arial, sans-serif">
          You received this email because you subscribed to our newsletter. <a href="#" style="color: #ffffff; text-decoration: underline;">Unsubscribe</a>.
        </mj-text>
      </mj-column>
    </mj-section>

  </mj-body>
</mjml>
`
      }
      ]);
}