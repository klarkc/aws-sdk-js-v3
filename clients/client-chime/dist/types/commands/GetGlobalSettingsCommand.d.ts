import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { GetGlobalSettingsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetGlobalSettingsCommandInput {}
export interface GetGlobalSettingsCommandOutput extends GetGlobalSettingsResponse, __MetadataBearer {}
/**
 * <p>Retrieves global settings for the administrator's AWS account, such as Amazon Chime Business
 *             Calling and Amazon Chime Voice Connector settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetGlobalSettingsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetGlobalSettingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetGlobalSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGlobalSettingsCommandInput} for command's `input` shape.
 * @see {@link GetGlobalSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetGlobalSettingsCommand extends $Command<
  GetGlobalSettingsCommandInput,
  GetGlobalSettingsCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: GetGlobalSettingsCommandInput;
  constructor(input: GetGlobalSettingsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetGlobalSettingsCommandInput, GetGlobalSettingsCommandOutput>;
  private serialize;
  private deserialize;
}
