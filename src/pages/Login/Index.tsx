import * as React from "react"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"

import { Background } from '@/components'

export const Login: React.FC = () => {

  const [loading, setLoading] = React.useState(false)

  const handleLogin = () => {
    setLoading(true)
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50 h-screen relative overflow-hidden items-center justify-center">
      <Background />
      <Card className="w-[350px] md:w-[420px] h-auto" style={{ zIndex: 2 }}>
        <CardHeader>
          <CardTitle>欢迎回来！</CardTitle>
          <CardDescription>登录以继续操作</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">邮箱</Label>
                <Input id="name" placeholder="input your email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">密码</Label>
                <Input type='password' id="name" placeholder="input your password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex items-center justify-center">
          <Button className='w-[320px] md:w-[400px]' onClick={handleLogin}>
            {loading ? <><Loader2 className="animate-spin" />Loading...</> : <>Login</>}
          </Button>
        </CardFooter>
      </Card>
    </div>

  )
}
