"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListChangeSetsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns the list of change sets owned by the account being used to make the call. You
 *             can filter this list by providing any combination of <code>entityId</code>,
 *                 <code>ChangeSetName</code>, and status. If you provide more than one filter, the API
 *             operation applies a logical AND between the filters.</p>
 *
 *         <p>You can describe a change during the 60-day request history retention period for API
 *             calls.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCatalogClient, ListChangeSetsCommand } from "@aws-sdk/client-marketplace-catalog"; // ES Modules import
 * // const { MarketplaceCatalogClient, ListChangeSetsCommand } = require("@aws-sdk/client-marketplace-catalog"); // CommonJS import
 * const client = new MarketplaceCatalogClient(config);
 * const command = new ListChangeSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListChangeSetsCommandInput} for command's `input` shape.
 * @see {@link ListChangeSetsCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListChangeSetsCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "MarketplaceCatalogClient";
        const commandName = "ListChangeSetsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListChangeSetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListChangeSetsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListChangeSetsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListChangeSetsCommand(output, context);
    }
}
exports.ListChangeSetsCommand = ListChangeSetsCommand;
//# sourceMappingURL=ListChangeSetsCommand.js.map