import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { UpdateObjectAttributesRequest, UpdateObjectAttributesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateObjectAttributesCommandInput extends UpdateObjectAttributesRequest {}
export interface UpdateObjectAttributesCommandOutput extends UpdateObjectAttributesResponse, __MetadataBearer {}
/**
 * <p>Updates a given object's attributes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, UpdateObjectAttributesCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, UpdateObjectAttributesCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new UpdateObjectAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateObjectAttributesCommandInput} for command's `input` shape.
 * @see {@link UpdateObjectAttributesCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateObjectAttributesCommand extends $Command<
  UpdateObjectAttributesCommandInput,
  UpdateObjectAttributesCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  readonly input: UpdateObjectAttributesCommandInput;
  constructor(input: UpdateObjectAttributesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateObjectAttributesCommandInput, UpdateObjectAttributesCommandOutput>;
  private serialize;
  private deserialize;
}
