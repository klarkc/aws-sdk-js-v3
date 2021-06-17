"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchGrantPermissionsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Batch operation to grant permissions to the principal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, BatchGrantPermissionsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, BatchGrantPermissionsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new BatchGrantPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGrantPermissionsCommandInput} for command's `input` shape.
 * @see {@link BatchGrantPermissionsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
class BatchGrantPermissionsCommand extends smithy_client_1.Command {
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
        const clientName = "LakeFormationClient";
        const commandName = "BatchGrantPermissionsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.BatchGrantPermissionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.BatchGrantPermissionsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1BatchGrantPermissionsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1BatchGrantPermissionsCommand(output, context);
    }
}
exports.BatchGrantPermissionsCommand = BatchGrantPermissionsCommand;
//# sourceMappingURL=BatchGrantPermissionsCommand.js.map