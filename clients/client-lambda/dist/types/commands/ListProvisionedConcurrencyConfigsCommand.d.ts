import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { ListProvisionedConcurrencyConfigsRequest, ListProvisionedConcurrencyConfigsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListProvisionedConcurrencyConfigsCommandInput extends ListProvisionedConcurrencyConfigsRequest {
}
export interface ListProvisionedConcurrencyConfigsCommandOutput extends ListProvisionedConcurrencyConfigsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a list of provisioned concurrency configurations for a function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListProvisionedConcurrencyConfigsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListProvisionedConcurrencyConfigsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new ListProvisionedConcurrencyConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProvisionedConcurrencyConfigsCommandInput} for command's `input` shape.
 * @see {@link ListProvisionedConcurrencyConfigsCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListProvisionedConcurrencyConfigsCommand extends $Command<ListProvisionedConcurrencyConfigsCommandInput, ListProvisionedConcurrencyConfigsCommandOutput, LambdaClientResolvedConfig> {
    readonly input: ListProvisionedConcurrencyConfigsCommandInput;
    constructor(input: ListProvisionedConcurrencyConfigsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProvisionedConcurrencyConfigsCommandInput, ListProvisionedConcurrencyConfigsCommandOutput>;
    private serialize;
    private deserialize;
}
