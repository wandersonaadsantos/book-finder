import { FC } from 'react'
import ErrorProps from './interface'

const ErrorPage: FC<ErrorProps> = ({ err }) => (
    <div className="container py-5">
        <div className="row">
            <div className="col-12 pt-5 text-center">
                <p className="h5 pt-5 text-danger"><strong>Something went wrong!!</strong></p>
                {err && <p className="mb-0">{'Error msg: '}{err}</p>}
            </div>
        </div>
    </div>
)

export default ErrorPage
