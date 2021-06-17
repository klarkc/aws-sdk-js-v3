"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMissionProfileCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a mission profile.</p>
 *          <p>
 *             <code>dataflowEdges</code> is a list of lists of strings. Each lower level list of strings
 *          has two elements: a <i>from</i> ARN and a <i>to</i> ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, CreateMissionProfileCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, CreateMissionProfileCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new CreateMissionProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMissionProfileCommandInput} for command's `input` shape.
 * @see {@link CreateMissionProfileCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateMissionProfileCommand extends smithy_client_1.Command {
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
        const clientName = "GroundStationClient";
        const commandName = "CreateMissionProfileCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateMissionProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.MissionProfileIdResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1CreateMissionProfileCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1CreateMissionProfileCommand(output, context);
    }
}
exports.CreateMissionProfileCommand = CreateMissionProfileCommand;
//# sourceMappingURL=CreateMissionProfileCommand.js.map