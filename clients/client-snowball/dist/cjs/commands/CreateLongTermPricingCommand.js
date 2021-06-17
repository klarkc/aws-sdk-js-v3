"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLongTermPricingCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a job with long term usage option for a device. The long term usage is a one year or three year long term pricing type for the device.
 *       You are billed upfront and AWS give discounts for long term pricing. For detailed information see XXXXXXXX</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, CreateLongTermPricingCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, CreateLongTermPricingCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new CreateLongTermPricingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLongTermPricingCommandInput} for command's `input` shape.
 * @see {@link CreateLongTermPricingCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateLongTermPricingCommand extends smithy_client_1.Command {
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
        const clientName = "SnowballClient";
        const commandName = "CreateLongTermPricingCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateLongTermPricingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateLongTermPricingResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateLongTermPricingCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateLongTermPricingCommand(output, context);
    }
}
exports.CreateLongTermPricingCommand = CreateLongTermPricingCommand;
//# sourceMappingURL=CreateLongTermPricingCommand.js.map