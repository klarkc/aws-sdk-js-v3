"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCustomAvailabilityZoneCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes a custom Availability Zone (AZ).</p>
 *         <p>A custom AZ is an on-premises AZ that is integrated with a VMware vSphere cluster.</p>
 *         <p>For more information about RDS on VMware, see the
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html">
 *                 RDS on VMware User Guide.</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteCustomAvailabilityZoneCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteCustomAvailabilityZoneCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DeleteCustomAvailabilityZoneCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCustomAvailabilityZoneCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomAvailabilityZoneCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteCustomAvailabilityZoneCommand extends smithy_client_1.Command {
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
        const clientName = "RDSClient";
        const commandName = "DeleteCustomAvailabilityZoneCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteCustomAvailabilityZoneMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteCustomAvailabilityZoneResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryDeleteCustomAvailabilityZoneCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryDeleteCustomAvailabilityZoneCommand(output, context);
    }
}
exports.DeleteCustomAvailabilityZoneCommand = DeleteCustomAvailabilityZoneCommand;
//# sourceMappingURL=DeleteCustomAvailabilityZoneCommand.js.map