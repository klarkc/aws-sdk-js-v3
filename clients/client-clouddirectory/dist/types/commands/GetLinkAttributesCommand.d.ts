import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { GetLinkAttributesRequest, GetLinkAttributesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetLinkAttributesCommandInput extends GetLinkAttributesRequest {}
export interface GetLinkAttributesCommandOutput extends GetLinkAttributesResponse, __MetadataBearer {}
/**
 * <p>Retrieves attributes that are associated with a typed link.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, GetLinkAttributesCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, GetLinkAttributesCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new GetLinkAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLinkAttributesCommandInput} for command's `input` shape.
 * @see {@link GetLinkAttributesCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetLinkAttributesCommand extends $Command<
  GetLinkAttributesCommandInput,
  GetLinkAttributesCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  readonly input: GetLinkAttributesCommandInput;
  constructor(input: GetLinkAttributesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLinkAttributesCommandInput, GetLinkAttributesCommandOutput>;
  private serialize;
  private deserialize;
}
