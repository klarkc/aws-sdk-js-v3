import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { DeleteTypedLinkFacetRequest, DeleteTypedLinkFacetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteTypedLinkFacetCommandInput extends DeleteTypedLinkFacetRequest {}
export interface DeleteTypedLinkFacetCommandOutput extends DeleteTypedLinkFacetResponse, __MetadataBearer {}
/**
 * <p>Deletes a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, DeleteTypedLinkFacetCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, DeleteTypedLinkFacetCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new DeleteTypedLinkFacetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTypedLinkFacetCommandInput} for command's `input` shape.
 * @see {@link DeleteTypedLinkFacetCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTypedLinkFacetCommand extends $Command<
  DeleteTypedLinkFacetCommandInput,
  DeleteTypedLinkFacetCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  readonly input: DeleteTypedLinkFacetCommandInput;
  constructor(input: DeleteTypedLinkFacetCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteTypedLinkFacetCommandInput, DeleteTypedLinkFacetCommandOutput>;
  private serialize;
  private deserialize;
}
