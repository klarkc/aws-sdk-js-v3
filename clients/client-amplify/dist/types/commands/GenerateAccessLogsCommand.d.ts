import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { GenerateAccessLogsRequest, GenerateAccessLogsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GenerateAccessLogsCommandInput extends GenerateAccessLogsRequest {}
export interface GenerateAccessLogsCommandOutput extends GenerateAccessLogsResult, __MetadataBearer {}
/**
 * <p> Returns the website access logs for a specific time range using a presigned URL.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, GenerateAccessLogsCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, GenerateAccessLogsCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new GenerateAccessLogsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateAccessLogsCommandInput} for command's `input` shape.
 * @see {@link GenerateAccessLogsCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GenerateAccessLogsCommand extends $Command<
  GenerateAccessLogsCommandInput,
  GenerateAccessLogsCommandOutput,
  AmplifyClientResolvedConfig
> {
  readonly input: GenerateAccessLogsCommandInput;
  constructor(input: GenerateAccessLogsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GenerateAccessLogsCommandInput, GenerateAccessLogsCommandOutput>;
  private serialize;
  private deserialize;
}
