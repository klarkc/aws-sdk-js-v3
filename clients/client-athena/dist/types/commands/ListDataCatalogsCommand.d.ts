import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { ListDataCatalogsInput, ListDataCatalogsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListDataCatalogsCommandInput extends ListDataCatalogsInput {}
export interface ListDataCatalogsCommandOutput extends ListDataCatalogsOutput, __MetadataBearer {}
/**
 * <p>Lists the data catalogs in the current AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListDataCatalogsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListDataCatalogsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new ListDataCatalogsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDataCatalogsCommandInput} for command's `input` shape.
 * @see {@link ListDataCatalogsCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDataCatalogsCommand extends $Command<
  ListDataCatalogsCommandInput,
  ListDataCatalogsCommandOutput,
  AthenaClientResolvedConfig
> {
  readonly input: ListDataCatalogsCommandInput;
  constructor(input: ListDataCatalogsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDataCatalogsCommandInput, ListDataCatalogsCommandOutput>;
  private serialize;
  private deserialize;
}
