"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeTableRestoreStatusCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists the status of one or more table restore requests made using the <a>RestoreTableFromClusterSnapshot</a> API action. If you don't specify a value
 *             for the <code>TableRestoreRequestId</code> parameter, then
 *                 <code>DescribeTableRestoreStatus</code> returns the status of all table restore
 *             requests ordered by the date and time of the request in ascending order. Otherwise
 *                 <code>DescribeTableRestoreStatus</code> returns the status of the table specified by
 *                 <code>TableRestoreRequestId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeTableRestoreStatusCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeTableRestoreStatusCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeTableRestoreStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTableRestoreStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeTableRestoreStatusCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeTableRestoreStatusCommand extends smithy_client_1.Command {
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
        const clientName = "RedshiftClient";
        const commandName = "DescribeTableRestoreStatusCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.DescribeTableRestoreStatusMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.TableRestoreStatusMessage.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryDescribeTableRestoreStatusCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryDescribeTableRestoreStatusCommand(output, context);
    }
}
exports.DescribeTableRestoreStatusCommand = DescribeTableRestoreStatusCommand;
//# sourceMappingURL=DescribeTableRestoreStatusCommand.js.map