"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchPutScheduledUpdateGroupActionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates or updates one or more scheduled scaling actions for an Auto Scaling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, BatchPutScheduledUpdateGroupActionCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, BatchPutScheduledUpdateGroupActionCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new BatchPutScheduledUpdateGroupActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchPutScheduledUpdateGroupActionCommandInput} for command's `input` shape.
 * @see {@link BatchPutScheduledUpdateGroupActionCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
class BatchPutScheduledUpdateGroupActionCommand extends smithy_client_1.Command {
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
    const clientName = "AutoScalingClient";
    const commandName = "BatchPutScheduledUpdateGroupActionCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.BatchPutScheduledUpdateGroupActionType.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.BatchPutScheduledUpdateGroupActionAnswer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_query_1.serializeAws_queryBatchPutScheduledUpdateGroupActionCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_query_1.deserializeAws_queryBatchPutScheduledUpdateGroupActionCommand(output, context);
  }
}
exports.BatchPutScheduledUpdateGroupActionCommand = BatchPutScheduledUpdateGroupActionCommand;
//# sourceMappingURL=BatchPutScheduledUpdateGroupActionCommand.js.map
