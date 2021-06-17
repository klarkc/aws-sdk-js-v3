"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRouteCalculatorsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists route calculator resources in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListRouteCalculatorsCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListRouteCalculatorsCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new ListRouteCalculatorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRouteCalculatorsCommandInput} for command's `input` shape.
 * @see {@link ListRouteCalculatorsCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListRouteCalculatorsCommand extends smithy_client_1.Command {
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
        const clientName = "LocationClient";
        const commandName = "ListRouteCalculatorsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListRouteCalculatorsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListRouteCalculatorsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListRouteCalculatorsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListRouteCalculatorsCommand(output, context);
    }
}
exports.ListRouteCalculatorsCommand = ListRouteCalculatorsCommand;
//# sourceMappingURL=ListRouteCalculatorsCommand.js.map