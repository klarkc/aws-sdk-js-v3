"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetResourcePoliciesCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves the resource policies set on individual resources by AWS Resource Access Manager
 *       during cross-account permission grants. Also retrieves the Data Catalog resource
 *       policy.</p>
 *          <p>If you enabled metadata encryption in Data Catalog settings, and you do not have
 *       permission on the AWS KMS key, the operation can't return the Data Catalog resource
 *       policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetResourcePoliciesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetResourcePoliciesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetResourcePoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourcePoliciesCommandInput} for command's `input` shape.
 * @see {@link GetResourcePoliciesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetResourcePoliciesCommand extends smithy_client_1.Command {
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
        const clientName = "GlueClient";
        const commandName = "GetResourcePoliciesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.GetResourcePoliciesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.GetResourcePoliciesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetResourcePoliciesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetResourcePoliciesCommand(output, context);
    }
}
exports.GetResourcePoliciesCommand = GetResourcePoliciesCommand;
//# sourceMappingURL=GetResourcePoliciesCommand.js.map