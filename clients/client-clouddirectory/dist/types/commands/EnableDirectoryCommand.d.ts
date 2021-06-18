import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { EnableDirectoryRequest, EnableDirectoryResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface EnableDirectoryCommandInput extends EnableDirectoryRequest {}
export interface EnableDirectoryCommandOutput extends EnableDirectoryResponse, __MetadataBearer {}
/**
 * <p>Enables the specified directory. Only disabled directories can be enabled. Once
 *       enabled, the directory can then be read and written to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, EnableDirectoryCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, EnableDirectoryCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new EnableDirectoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableDirectoryCommandInput} for command's `input` shape.
 * @see {@link EnableDirectoryCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EnableDirectoryCommand extends $Command<
  EnableDirectoryCommandInput,
  EnableDirectoryCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  readonly input: EnableDirectoryCommandInput;
  constructor(input: EnableDirectoryCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableDirectoryCommandInput, EnableDirectoryCommandOutput>;
  private serialize;
  private deserialize;
}
