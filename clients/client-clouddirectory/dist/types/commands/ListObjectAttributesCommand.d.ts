import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { ListObjectAttributesRequest, ListObjectAttributesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListObjectAttributesCommandInput extends ListObjectAttributesRequest {}
export interface ListObjectAttributesCommandOutput extends ListObjectAttributesResponse, __MetadataBearer {}
/**
 * <p>Lists all attributes that are associated with an object.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListObjectAttributesCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListObjectAttributesCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListObjectAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListObjectAttributesCommandInput} for command's `input` shape.
 * @see {@link ListObjectAttributesCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListObjectAttributesCommand extends $Command<
  ListObjectAttributesCommandInput,
  ListObjectAttributesCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  readonly input: ListObjectAttributesCommandInput;
  constructor(input: ListObjectAttributesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListObjectAttributesCommandInput, ListObjectAttributesCommandOutput>;
  private serialize;
  private deserialize;
}
