import { __extends } from "tslib";
import { BatchAssociateUserStackRequest, BatchAssociateUserStackResult } from "../models/models_0";
import {
  deserializeAws_json1_1BatchAssociateUserStackCommand,
  serializeAws_json1_1BatchAssociateUserStackCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, BatchAssociateUserStackCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, BatchAssociateUserStackCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new BatchAssociateUserStackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchAssociateUserStackCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateUserStackCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchAssociateUserStackCommand = /** @class */ (function (_super) {
  __extends(BatchAssociateUserStackCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function BatchAssociateUserStackCommand(input) {
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
  BatchAssociateUserStackCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "BatchAssociateUserStackCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: BatchAssociateUserStackRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchAssociateUserStackResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  BatchAssociateUserStackCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1BatchAssociateUserStackCommand(input, context);
  };
  BatchAssociateUserStackCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1BatchAssociateUserStackCommand(output, context);
  };
  return BatchAssociateUserStackCommand;
})($Command);
export { BatchAssociateUserStackCommand };
//# sourceMappingURL=BatchAssociateUserStackCommand.js.map
