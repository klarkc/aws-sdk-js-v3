import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { GetTypedLinkFacetInformationRequest, GetTypedLinkFacetInformationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetTypedLinkFacetInformationCommandInput extends GetTypedLinkFacetInformationRequest {}
export interface GetTypedLinkFacetInformationCommandOutput
  extends GetTypedLinkFacetInformationResponse,
    __MetadataBearer {}
/**
 * <p>Returns the identity attribute order for a specific <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, GetTypedLinkFacetInformationCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, GetTypedLinkFacetInformationCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new GetTypedLinkFacetInformationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTypedLinkFacetInformationCommandInput} for command's `input` shape.
 * @see {@link GetTypedLinkFacetInformationCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetTypedLinkFacetInformationCommand extends $Command<
  GetTypedLinkFacetInformationCommandInput,
  GetTypedLinkFacetInformationCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  readonly input: GetTypedLinkFacetInformationCommandInput;
  constructor(input: GetTypedLinkFacetInformationCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTypedLinkFacetInformationCommandInput, GetTypedLinkFacetInformationCommandOutput>;
  private serialize;
  private deserialize;
}
