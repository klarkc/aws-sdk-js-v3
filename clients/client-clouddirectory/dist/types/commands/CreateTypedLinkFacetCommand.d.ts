import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { CreateTypedLinkFacetRequest, CreateTypedLinkFacetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateTypedLinkFacetCommandInput extends CreateTypedLinkFacetRequest {}
export interface CreateTypedLinkFacetCommandOutput extends CreateTypedLinkFacetResponse, __MetadataBearer {}
/**
 * <p>Creates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, CreateTypedLinkFacetCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, CreateTypedLinkFacetCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new CreateTypedLinkFacetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTypedLinkFacetCommandInput} for command's `input` shape.
 * @see {@link CreateTypedLinkFacetCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTypedLinkFacetCommand extends $Command<
  CreateTypedLinkFacetCommandInput,
  CreateTypedLinkFacetCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  readonly input: CreateTypedLinkFacetCommandInput;
  constructor(input: CreateTypedLinkFacetCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTypedLinkFacetCommandInput, CreateTypedLinkFacetCommandOutput>;
  private serialize;
  private deserialize;
}
