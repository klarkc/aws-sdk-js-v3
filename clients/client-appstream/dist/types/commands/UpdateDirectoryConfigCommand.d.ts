import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { UpdateDirectoryConfigRequest, UpdateDirectoryConfigResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateDirectoryConfigCommandInput extends UpdateDirectoryConfigRequest {}
export interface UpdateDirectoryConfigCommandOutput extends UpdateDirectoryConfigResult, __MetadataBearer {}
/**
 * <p>Updates the specified Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, UpdateDirectoryConfigCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, UpdateDirectoryConfigCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new UpdateDirectoryConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDirectoryConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateDirectoryConfigCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDirectoryConfigCommand extends $Command<
  UpdateDirectoryConfigCommandInput,
  UpdateDirectoryConfigCommandOutput,
  AppStreamClientResolvedConfig
> {
  readonly input: UpdateDirectoryConfigCommandInput;
  constructor(input: UpdateDirectoryConfigCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDirectoryConfigCommandInput, UpdateDirectoryConfigCommandOutput>;
  private serialize;
  private deserialize;
}
