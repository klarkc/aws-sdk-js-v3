import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { TagResourceRequest, TagResourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface TagResourceCommandInput extends TagResourceRequest {}
export interface TagResourceCommandOutput extends TagResourceResponse, __MetadataBearer {}
/**
 * <p>Adds metadata tags to a specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, TagResourceCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, TagResourceCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TagResourceCommand extends $Command<
  TagResourceCommandInput,
  TagResourceCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: TagResourceCommandInput;
  constructor(input: TagResourceCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TagResourceCommandInput, TagResourceCommandOutput>;
  private serialize;
  private deserialize;
}
