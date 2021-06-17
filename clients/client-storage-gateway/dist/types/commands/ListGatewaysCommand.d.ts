import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { ListGatewaysInput, ListGatewaysOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListGatewaysCommandInput extends ListGatewaysInput {
}
export interface ListGatewaysCommandOutput extends ListGatewaysOutput, __MetadataBearer {
}
/**
 * <p>Lists gateways owned by an AWS account in an AWS Region specified in the request. The
 *          returned list is ordered by gateway Amazon Resource Name (ARN).</p>
 *
 *          <p>By default, the operation returns a maximum of 100 gateways. This operation supports
 *          pagination that allows you to optionally reduce the number of gateways returned in a
 *          response.</p>
 *
 *          <p>If you have more gateways than are returned in a response (that is, the response returns
 *          only a truncated list of your gateways), the response contains a marker that you can
 *          specify in your next request to fetch the next page of gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListGatewaysCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListGatewaysCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new ListGatewaysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGatewaysCommandInput} for command's `input` shape.
 * @see {@link ListGatewaysCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListGatewaysCommand extends $Command<ListGatewaysCommandInput, ListGatewaysCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: ListGatewaysCommandInput;
    constructor(input: ListGatewaysCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListGatewaysCommandInput, ListGatewaysCommandOutput>;
    private serialize;
    private deserialize;
}
