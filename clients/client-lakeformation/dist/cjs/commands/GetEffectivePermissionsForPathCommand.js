"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEffectivePermissionsForPathCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns the Lake Formation permissions for a specified table or database resource located
 *       at a path in Amazon S3. <code>GetEffectivePermissionsForPath</code> will not return databases and tables if the catalog is encrypted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetEffectivePermissionsForPathCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetEffectivePermissionsForPathCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new GetEffectivePermissionsForPathCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEffectivePermissionsForPathCommandInput} for command's `input` shape.
 * @see {@link GetEffectivePermissionsForPathCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetEffectivePermissionsForPathCommand extends smithy_client_1.Command {
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
        const commandName = "GetEffectivePermissionsForPathCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetEffectivePermissionsForPathRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetEffectivePermissionsForPathResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetEffectivePermissionsForPathCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetEffectivePermissionsForPathCommand(output, context);
    }
}
exports.GetEffectivePermissionsForPathCommand = GetEffectivePermissionsForPathCommand;
//# sourceMappingURL=GetEffectivePermissionsForPathCommand.js.map