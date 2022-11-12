import React from 'react'
import { Stack, Box } from '@mui/system';
import { Chat_History } from '../../../data';
import { MediaMsg, TextMsg, TimeLine } from './MsgType';

const Message = () => {
  return (
    <Box p={3}>
<Stack spacing={3}>
{Chat_History.map((el) => {
switch (el.type) {
case "divider":
return <TimeLine el={el}/>
case "msg":
switch (el.subtype){
case "img": return <MediaMsg el={el} />
case "doc":
break;
case "link":
break;
case "replay":
break;

default:return <TextMsg el={el} />
// text msg
break;
}
break;
default:
}})
}</Stack>
</Box>
  )}
export default Message