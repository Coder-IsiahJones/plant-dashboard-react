import { Avatar, Button, Card, Divider, Flex, Tooltip, Typography } from "antd";

const SellerList = () => {
  return (
    <Flex align="center" justify="space-between" gap="large">
      <Flex vertical="row" gap="small" className="top-seller">
        <Flex align="center" justify="space-between">
          <Typography.Title level={5} strong className="primary--color">
            Top Seller
          </Typography.Title>

          <Button type="link" className="gray--color">
            View All
          </Button>
        </Flex>

        <Card>
          <Flex align="center" justify="space-evenly">
            <Avatar.Group
              max={{
                count: 5,
                style: {
                  color: "#f56a00",
                  backgroundColor: "#fde3cf",
                  cursor: "progress",
                },
                popover: { title: "Seller List", trigger: "click" },
              }}
              size="large"
            >
              <Tooltip title="User 1" placement="top">
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
              </Tooltip>

              <Tooltip title="User 2" placement="top">
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
              </Tooltip>

              <Tooltip title="User 3" placement="top">
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
              </Tooltip>

              <Tooltip title="User 4" placement="top">
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=4" />
              </Tooltip>

              <Tooltip title="User 5" placement="top">
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=5" />
              </Tooltip>

              <Tooltip title="User 6" placement="top">
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=6" />
              </Tooltip>

              <Tooltip title="User 7" placement="top">
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=7" />
              </Tooltip>
            </Avatar.Group>

            <Divider type="vertical" className="divider" />
            <Flex vertical="row">
              <Typography.Text type="secondary" strong>
                1,200 plants sold
              </Typography.Text>

              <Typography.Text type="secondary" strong>
                10 sellers
              </Typography.Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>

      <Flex vertical="row" gap="small" className="featured-seller">
        <Flex align="center" justify="space-between">
          <Typography.Title level={5} strong className="primary--color">
            Featured Seller
          </Typography.Title>

          <Button type="link" className="gray--color">
            View All
          </Button>
        </Flex>

        <Card>
          <Flex align="center" justify="space-evenly">
            <Avatar.Group
              max={{
                count: 5,
                style: {
                  color: "#f56a00",
                  backgroundColor: "#fde3cf",
                  cursor: "progress",
                },
                popover: { title: "Seller List", trigger: "click" },
              }}
              size="large"
            >
              <Tooltip title="User 1" placement="top">
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
              </Tooltip>

              <Tooltip title="User 2" placement="top">
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
              </Tooltip>

              <Tooltip title="User 3" placement="top">
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
              </Tooltip>

              <Tooltip title="User 4" placement="top">
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=4" />
              </Tooltip>

              <Tooltip title="User 5" placement="top">
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=5" />
              </Tooltip>

              <Tooltip title="User 6" placement="top">
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=6" />
              </Tooltip>

              <Tooltip title="User 7" placement="top">
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=7" />
              </Tooltip>
            </Avatar.Group>

            <Divider type="vertical" className="divider" />
            <Flex vertical="row">
              <Typography.Text type="secondary" strong>
                2,250 plants sold
              </Typography.Text>

              <Typography.Text type="secondary" strong>
                8 seller
              </Typography.Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
};

export default SellerList;
