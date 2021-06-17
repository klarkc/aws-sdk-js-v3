"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFleetsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns a list of fleets. You can optionally provide filters to retrieve specific
 *          fleets. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListFleetsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListFleetsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new ListFleetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFleetsCommandInput} for command's `input` shape.
 * @see {@link ListFleetsCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListFleetsCommand extends smithy_client_1.Command {
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
        const clientName = "RoboMakerClient";
        const commandName = "ListFleetsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListFleetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListFleetsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListFleetsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListFleetsCommand(output, context);
    }
}
exports.ListFleetsCommand = ListFleetsCommand;
//# sourceMappingURL=ListFleetsCommand.js.map