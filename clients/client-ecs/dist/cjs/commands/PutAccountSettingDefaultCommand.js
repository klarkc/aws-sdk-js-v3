"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutAccountSettingDefaultCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Modifies an account setting for all IAM users on an account for whom no individual
 * 			account setting has been specified. Account settings are set on a per-Region
 * 			basis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, PutAccountSettingDefaultCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, PutAccountSettingDefaultCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new PutAccountSettingDefaultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAccountSettingDefaultCommandInput} for command's `input` shape.
 * @see {@link PutAccountSettingDefaultCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutAccountSettingDefaultCommand extends smithy_client_1.Command {
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
        const clientName = "ECSClient";
        const commandName = "PutAccountSettingDefaultCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutAccountSettingDefaultRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutAccountSettingDefaultResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1PutAccountSettingDefaultCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1PutAccountSettingDefaultCommand(output, context);
    }
}
exports.PutAccountSettingDefaultCommand = PutAccountSettingDefaultCommand;
//# sourceMappingURL=PutAccountSettingDefaultCommand.js.map