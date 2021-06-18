import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DeleteImagePermissionsRequest, DeleteImagePermissionsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteImagePermissionsCommandInput extends DeleteImagePermissionsRequest {}
export interface DeleteImagePermissionsCommandOutput extends DeleteImagePermissionsResult, __MetadataBearer {}
/**
 * <p>Deletes permissions for the specified private image. After you delete permissions for an image, AWS accounts to which you previously granted these permissions can no longer use the image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DeleteImagePermissionsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DeleteImagePermissionsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new DeleteImagePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteImagePermissionsCommandInput} for command's `input` shape.
 * @see {@link DeleteImagePermissionsCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteImagePermissionsCommand extends $Command<
  DeleteImagePermissionsCommandInput,
  DeleteImagePermissionsCommandOutput,
  AppStreamClientResolvedConfig
> {
  readonly input: DeleteImagePermissionsCommandInput;
  constructor(input: DeleteImagePermissionsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteImagePermissionsCommandInput, DeleteImagePermissionsCommandOutput>;
  private serialize;
  private deserialize;
}
