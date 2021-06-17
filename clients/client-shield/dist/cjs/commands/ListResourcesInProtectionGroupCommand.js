"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListResourcesInProtectionGroupCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves the resources that are included in the protection group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, ListResourcesInProtectionGroupCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, ListResourcesInProtectionGroupCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new ListResourcesInProtectionGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourcesInProtectionGroupCommandInput} for command's `input` shape.
 * @see {@link ListResourcesInProtectionGroupCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListResourcesInProtectionGroupCommand extends smithy_client_1.Command {
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
        const clientName = "ShieldClient";
        const commandName = "ListResourcesInProtectionGroupCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListResourcesInProtectionGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListResourcesInProtectionGroupResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListResourcesInProtectionGroupCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListResourcesInProtectionGroupCommand(output, context);
    }
}
exports.ListResourcesInProtectionGroupCommand = ListResourcesInProtectionGroupCommand;
//# sourceMappingURL=ListResourcesInProtectionGroupCommand.js.map