import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListSubscriptionDefinitionsRequest, ListSubscriptionDefinitionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSubscriptionDefinitionsCommandInput extends ListSubscriptionDefinitionsRequest {
}
export interface ListSubscriptionDefinitionsCommandOutput extends ListSubscriptionDefinitionsResponse, __MetadataBearer {
}
/**
 * Retrieves a list of subscription definitions.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListSubscriptionDefinitionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListSubscriptionDefinitionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListSubscriptionDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSubscriptionDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListSubscriptionDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSubscriptionDefinitionsCommand extends $Command<ListSubscriptionDefinitionsCommandInput, ListSubscriptionDefinitionsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ListSubscriptionDefinitionsCommandInput;
    constructor(input: ListSubscriptionDefinitionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSubscriptionDefinitionsCommandInput, ListSubscriptionDefinitionsCommandOutput>;
    private serialize;
    private deserialize;
}
