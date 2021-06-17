"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSimulationApplicationsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns a list of simulation applications. You can optionally provide filters to
 *          retrieve specific simulation applications. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListSimulationApplicationsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListSimulationApplicationsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new ListSimulationApplicationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSimulationApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListSimulationApplicationsCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListSimulationApplicationsCommand extends smithy_client_1.Command {
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
        const commandName = "ListSimulationApplicationsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListSimulationApplicationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListSimulationApplicationsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListSimulationApplicationsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListSimulationApplicationsCommand(output, context);
    }
}
exports.ListSimulationApplicationsCommand = ListSimulationApplicationsCommand;
//# sourceMappingURL=ListSimulationApplicationsCommand.js.map