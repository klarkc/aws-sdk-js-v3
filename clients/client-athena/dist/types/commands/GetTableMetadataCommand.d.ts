import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { GetTableMetadataInput, GetTableMetadataOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetTableMetadataCommandInput extends GetTableMetadataInput {}
export interface GetTableMetadataCommandOutput extends GetTableMetadataOutput, __MetadataBearer {}
/**
 * <p>Returns table metadata for the specified catalog, database, and table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetTableMetadataCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetTableMetadataCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new GetTableMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTableMetadataCommandInput} for command's `input` shape.
 * @see {@link GetTableMetadataCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetTableMetadataCommand extends $Command<
  GetTableMetadataCommandInput,
  GetTableMetadataCommandOutput,
  AthenaClientResolvedConfig
> {
  readonly input: GetTableMetadataCommandInput;
  constructor(input: GetTableMetadataCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTableMetadataCommandInput, GetTableMetadataCommandOutput>;
  private serialize;
  private deserialize;
}
