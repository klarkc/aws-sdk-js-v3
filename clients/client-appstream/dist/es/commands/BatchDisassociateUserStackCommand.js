import { __extends } from "tslib";
import { BatchDisassociateUserStackRequest, BatchDisassociateUserStackResult } from "../models/models_0";
import {
  deserializeAws_json1_1BatchDisassociateUserStackCommand,
  serializeAws_json1_1BatchDisassociateUserStackCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates the specified users from the specified stacks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, BatchDisassociateUserStackCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, BatchDisassociateUserStackCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new BatchDisassociateUserStackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDisassociateUserStackCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateUserStackCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchDisassociateUserStackCommand = /** @class */ (function (_super) {
  __extends(BatchDisassociateUserStackCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function BatchDisassociateUserStackCommand(input) {
    var _this =
      // Start section: command_constructor
      _super.call(this) || this;
    _this.input = input;
    return _this;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  BatchDisassociateUserStackCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "BatchDisassociateUserStackCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: BatchDisassociateUserStackRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDisassociateUserStackResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  BatchDisassociateUserStackCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1BatchDisassociateUserStackCommand(input, context);
  };
  BatchDisassociateUserStackCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1BatchDisassociateUserStackCommand(output, context);
  };
  return BatchDisassociateUserStackCommand;
})($Command);
export { BatchDisassociateUserStackCommand };
//# sourceMappingURL=BatchDisassociateUserStackCommand.js.map
