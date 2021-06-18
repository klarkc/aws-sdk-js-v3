import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DeleteDirectoryConfigRequest, DeleteDirectoryConfigResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteDirectoryConfigCommandInput extends DeleteDirectoryConfigRequest {}
export interface DeleteDirectoryConfigCommandOutput extends DeleteDirectoryConfigResult, __MetadataBearer {}
/**
 * <p>Deletes the specified Directory Config object from AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DeleteDirectoryConfigCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DeleteDirectoryConfigCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new DeleteDirectoryConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDirectoryConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteDirectoryConfigCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDirectoryConfigCommand extends $Command<
  DeleteDirectoryConfigCommandInput,
  DeleteDirectoryConfigCommandOutput,
  AppStreamClientResolvedConfig
> {
  readonly input: DeleteDirectoryConfigCommandInput;
  constructor(input: DeleteDirectoryConfigCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDirectoryConfigCommandInput, DeleteDirectoryConfigCommandOutput>;
  private serialize;
  private deserialize;
}
