import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { CreateUpdatedImageRequest, CreateUpdatedImageResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateUpdatedImageCommandInput extends CreateUpdatedImageRequest {}
export interface CreateUpdatedImageCommandOutput extends CreateUpdatedImageResult, __MetadataBearer {}
/**
 * <p>Creates a new image with the latest Windows operating system updates, driver updates, and AppStream 2.0 agent software.</p>
 *
 *         <p>For more information, see the "Update an Image by Using
 *             Managed AppStream 2.0 Image Updates" section in <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/administer-images.html">Administer Your AppStream 2.0 Images</a>, in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateUpdatedImageCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateUpdatedImageCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new CreateUpdatedImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUpdatedImageCommandInput} for command's `input` shape.
 * @see {@link CreateUpdatedImageCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateUpdatedImageCommand extends $Command<
  CreateUpdatedImageCommandInput,
  CreateUpdatedImageCommandOutput,
  AppStreamClientResolvedConfig
> {
  readonly input: CreateUpdatedImageCommandInput;
  constructor(input: CreateUpdatedImageCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateUpdatedImageCommandInput, CreateUpdatedImageCommandOutput>;
  private serialize;
  private deserialize;
}
