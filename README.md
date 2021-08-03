# The Coffee House

## 0. Report

- Đã làm thêm được gì?
  - Delivery Component
  - Add product to cart
  - Edit product from cart
  - Amount product (Component Header)
  - Update search address
- Học thêm được gì?
  - React hook cơ bản
  - useState()
  - useEffect()
- Khó khăn gặp phải?
  - Tính toán thời gian ở Delivery Component
  - Edit product from cart (Xử lý trùng sản phầm, trùng topping,...)

## Step 1: Break The UI Into A Component Hierarchy

![Image](https://scontent.fpnh22-2.fna.fbcdn.net/v/t1.15752-9/s2048x2048/196468877_2657702651194153_6118948014395866679_n.png?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_ohc=oqFgvC6rB3EAX-MrqzP&tn=aPJlnR-rezZbCgJA&_nc_ht=scontent.fpnh22-2.fna&tp=30&oh=d514ef03521e2fe93c5a9aa1152e9bca&oe=60E202F4)

### 1. Home chứa toàn bộ nội dung website (màu đỏ nâu)

### 2. Header chứa Logo, form địa chỉ giao hàng, button đăng nhập (màu xanh dương đậm)

    - Form (màu xanh lá non)
    - Button (màu hồng)
    - Input (màu đỏ )

### 3. Body chứa nội dung của website (màu xanh dương nhạt)

#### 3.1 Sidebar: danh mục sản phẩm (màu tím)

#### 3.2 Product Container: danh sách sản phẩm (màu đen)

- Input search: tìm kiếm sản phẩm (màu đỏ).
- Product Item: Ảnh,thông tin sản phẩm, nút thêm sản phẩm (màu cam).
  - Image product (màu cam nhạt)
  - Thông tin sản phẩm (màu vàng)
  - Currency (màu xanh ngọc)
  - Button add (màu xanh lá)

#### 3.3 Cart Container: (màu nâu)

    - Button cart (màu tím)
    - Currency (Màu xanh ngọc)
    - Form coupon (màu nâu nhạt)
        - Input coupon (màu đỏ)
        - Button Apply (màu tím)

### 4. Footer (màu xanh lá).

### 5. Hệ thống phân cấp

- Home

  - Header
    - Logo
    - Input
    - Button
  - Body

    - Sidebar

      - Category item

    - Products

      - Input search

      - Product Container

        -Produc tItem

              - CategoryName
              - ProductInfo
              - Image
              - ButtonAdd

    - Cart Container
      - ButtontCart
      - Input
      - ButtonApply
      - Currency

  - Footer

## Step 2: Build A Static Version in React (Xây dựng một bản tĩnh)

- Fetch API Category để hiển thị danh sách Category.
- Fetch API Product để hiển thị danh sách Product.

## Step 3: Identify The Minimal (but complete) Representation Of UI State

- Các Component sử dụng dữ liệu:
  - Category
  - Product
- Các component sử dụng props
  - Category: truyền props category id cho Product/
  - Product: dùng props category id đó so sánh với cate_id trong API để lấy dữ liệu.

## Step 4: Identify Where Your State Should Live (Xác định state của bạn ở đâu)

- Các component sử dụng state:
  - Category
  - Product

## Step 5: Add Inverse Data Flow (Cập nhật dữ liệu theo chiều ngược lại)
