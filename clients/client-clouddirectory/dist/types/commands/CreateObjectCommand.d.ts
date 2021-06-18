import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { CreateObjectRequest, CreateObjectResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateObjectCommandInput extends CreateObjectRequest {}
export interface CreateObjectCommandOutput extends CreateObjectResponse, __MetadataBearer {}
/**
 * <p>Creates an object in a <a>Directory</a>. Additionally attaches the object to
 *       a parent, if a parent reference and <code>LinkName</code> is specified. An object is simply a
 *       collection of <a>Facet</a> attributes. You can also use this API call to create a
 *       policy object, if the facet from which you create the object is a policy facet. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, CreateObjectCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, CreateObjectCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new CreateObjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateObjectCommandInput} for command's `input` shape.
 * @see {@link CreateObjectCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateObjectCommand extends $Command<
  CreateObjectCommandInput,
  CreateObjectCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  readonly input: CreateObjectCommandInput;
  constructor(input: CreateObjectCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateObjectCommandInput, CreateObjectCommandOutput>;
  private serialize;
  private deserialize;
}
