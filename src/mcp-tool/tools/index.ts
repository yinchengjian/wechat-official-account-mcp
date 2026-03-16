import { WechatToolDefinition, McpTool } from '../types.js';
import { authTool, authMcpTool } from './auth-tool.js';
import { mediaUploadTool } from './media-upload-tool.js';
import { uploadImgTool } from './upload-img-tool.js';
import { permanentMediaTool } from './permanent-media-tool.js';
import { draftTool, draftMcpTool } from './draft-tool.js';
import { publishTool, publishMcpTool } from './publish-tool.js';

/**
 * 所有微信公众号 MCP 工具
 */
export const wechatTools: WechatToolDefinition[] = [
  authTool,
  draftTool,
  publishTool,
];

/**
 * MCP工具列表
 * 
 * 仅保留核心内容管理功能，已移除以下存在安全风险的工具：
 * - wechat_user: 可获取用户隐私信息（昵称、OpenID、地理位置、头像、UnionID等）
 * - wechat_customer_service: 可向用户发送任意客服消息（滥用/骚扰风险）
 * - wechat_mass_send: 可向所有关注者群发消息（高滥用风险）
 * - wechat_template_msg: 可发送模板消息（骚扰风险）
 * - wechat_subscribe_msg: 可发送订阅通知（骚扰风险）
 * - wechat_tag: 可操作用户标签（用户数据操纵风险）
 * - wechat_menu: 可修改公众号菜单（篡改风险）
 * - wechat_statistics: 可获取统计分析数据（数据泄露风险）
 * - wechat_auto_reply: 可读取自动回复规则（信息泄露风险）
 */
export const mcpTools: McpTool[] = [
  // 认证管理
  authMcpTool,

  // 内容管理
  draftMcpTool,
  publishMcpTool,

  // 素材管理
  permanentMediaTool,
  mediaUploadTool,
  uploadImgTool,
];

export {
  authTool,
  mediaUploadTool,
  uploadImgTool,
  permanentMediaTool,
  draftTool,
  publishTool,
};