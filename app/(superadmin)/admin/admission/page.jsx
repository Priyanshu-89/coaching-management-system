
import connectDb from '@/app/utils/ConnectDb'
import User from '@/app/models/UserModel';
import CallingStudentTable from '../ui/CallingStudentTable';

const AdmissionPage = async() => {
    await connectDb();
    let users=await User.find({status:false, role:"user"})
    users=JSON.parse(JSON.stringify(users))
  return (
    <div className=' px-3 w-full py-5 flex flex-1 flex-col'>
        <h2 className='text-2xl text-slate-600 font-semibold py-4'>Manage New Admission ({users.length})</h2>
      <CallingStudentTable users={users}/>
    </div>
  )
}

export default AdmissionPage
