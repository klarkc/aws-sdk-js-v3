"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSnapshotsCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates crash-consistent snapshots of multiple EBS volumes and stores the data in S3.
 *     Volumes are chosen by specifying an instance. Any attached volumes will produce one snapshot
 *     each that is crash-consistent across the instance. Boot volumes can be excluded by changing the
 *     parameters. </p>
 *
 *          <p>You can create multi-volume snapshots of instances in a Region and instances on an
 *   	Outpost. If you create snapshots from an instance in a Region, the snapshots must be stored
 *   	in the same Region as the instance. If you create snapshots from an instance on an Outpost,
 *   	the snapshots can be stored on the same Outpost as the instance, or in the Region for that
 *   	Outpost.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateSnapshotsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateSnapshotsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateSnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSnapshotsCommandInput} for command's `input` shape.
 * @see {@link CreateSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateSnapshotsCommand extends smithy_client_1.Command {
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
        const clientName = "EC2Client";
        const commandName = "CreateSnapshotsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.CreateSnapshotsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.CreateSnapshotsResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2CreateSnapshotsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2CreateSnapshotsCommand(output, context);
    }
}
exports.CreateSnapshotsCommand = CreateSnapshotsCommand;
//# sourceMappingURL=CreateSnapshotsCommand.js.map