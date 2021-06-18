import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { UpdateTypedLinkFacetRequest, UpdateTypedLinkFacetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateTypedLinkFacetCommandInput extends UpdateTypedLinkFacetRequest {}
export interface UpdateTypedLinkFacetCommandOutput extends UpdateTypedLinkFacetResponse, __MetadataBearer {}
/**
 * <p>Updates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, UpdateTypedLinkFacetCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, UpdateTypedLinkFacetCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new UpdateTypedLinkFacetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTypedLinkFacetCommandInput} for command's `input` shape.
 * @see {@link UpdateTypedLinkFacetCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateTypedLinkFacetCommand extends $Command<
  UpdateTypedLinkFacetCommandInput,
  UpdateTypedLinkFacetCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  readonly input: UpdateTypedLinkFacetCommandInput;
  constructor(input: UpdateTypedLinkFacetCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTypedLinkFacetCommandInput, UpdateTypedLinkFacetCommandOutput>;
  private serialize;
  private deserialize;
}
