import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { GetDirectoryRequest, GetDirectoryResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetDirectoryCommandInput extends GetDirectoryRequest {}
export interface GetDirectoryCommandOutput extends GetDirectoryResponse, __MetadataBearer {}
/**
 * <p>Retrieves metadata about a directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, GetDirectoryCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, GetDirectoryCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new GetDirectoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDirectoryCommandInput} for command's `input` shape.
 * @see {@link GetDirectoryCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDirectoryCommand extends $Command<
  GetDirectoryCommandInput,
  GetDirectoryCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  readonly input: GetDirectoryCommandInput;
  constructor(input: GetDirectoryCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDirectoryCommandInput, GetDirectoryCommandOutput>;
  private serialize;
  private deserialize;
}
