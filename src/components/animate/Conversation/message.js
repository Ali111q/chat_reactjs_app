import React from 'react'
import { Stack, Box } from '@mui/system';
import { Chat_History } from '../../../data';
import  { LinkMsg, MediaMsg, ReplayMsg, TextMsg, DocMsg, TimeLine } from './MsgType';






const Message = () => {
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });
  return (
    <Box p={3} maxHeight="80vh" overflow="scroll" >
<Stack spacing={3}>
{Chat_History.map((el) => {
switch (el.type) {
case "divider":
return <TimeLine el={el}/>
case "msg":
switch (el.subtype){
case "img": return <MediaMsg el={el} />
case "doc":return <DocMsg el={el} />

case "link": return <LinkMsg el={el}/>
case "reply": return <ReplayMsg el={el}/>

default:return <TextMsg el={el} />
// text msg

}
break;
default:
}})
}</Stack>
</Box>
  )}
export default Message