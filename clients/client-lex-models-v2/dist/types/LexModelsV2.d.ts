import { LexModelsV2Client } from "./LexModelsV2Client";
import { BuildBotLocaleCommandInput, BuildBotLocaleCommandOutput } from "./commands/BuildBotLocaleCommand";
import { CreateBotAliasCommandInput, CreateBotAliasCommandOutput } from "./commands/CreateBotAliasCommand";
import { CreateBotCommandInput, CreateBotCommandOutput } from "./commands/CreateBotCommand";
import { CreateBotLocaleCommandInput, CreateBotLocaleCommandOutput } from "./commands/CreateBotLocaleCommand";
import { CreateBotVersionCommandInput, CreateBotVersionCommandOutput } from "./commands/CreateBotVersionCommand";
import { CreateExportCommandInput, CreateExportCommandOutput } from "./commands/CreateExportCommand";
import { CreateIntentCommandInput, CreateIntentCommandOutput } from "./commands/CreateIntentCommand";
import { CreateResourcePolicyCommandInput, CreateResourcePolicyCommandOutput } from "./commands/CreateResourcePolicyCommand";
import { CreateResourcePolicyStatementCommandInput, CreateResourcePolicyStatementCommandOutput } from "./commands/CreateResourcePolicyStatementCommand";
import { CreateSlotCommandInput, CreateSlotCommandOutput } from "./commands/CreateSlotCommand";
import { CreateSlotTypeCommandInput, CreateSlotTypeCommandOutput } from "./commands/CreateSlotTypeCommand";
import { CreateUploadUrlCommandInput, CreateUploadUrlCommandOutput } from "./commands/CreateUploadUrlCommand";
import { DeleteBotAliasCommandInput, DeleteBotAliasCommandOutput } from "./commands/DeleteBotAliasCommand";
import { DeleteBotCommandInput, DeleteBotCommandOutput } from "./commands/DeleteBotCommand";
import { DeleteBotLocaleCommandInput, DeleteBotLocaleCommandOutput } from "./commands/DeleteBotLocaleCommand";
import { DeleteBotVersionCommandInput, DeleteBotVersionCommandOutput } from "./commands/DeleteBotVersionCommand";
import { DeleteExportCommandInput, DeleteExportCommandOutput } from "./commands/DeleteExportCommand";
import { DeleteImportCommandInput, DeleteImportCommandOutput } from "./commands/DeleteImportCommand";
import { DeleteIntentCommandInput, DeleteIntentCommandOutput } from "./commands/DeleteIntentCommand";
import { DeleteResourcePolicyCommandInput, DeleteResourcePolicyCommandOutput } from "./commands/DeleteResourcePolicyCommand";
import { DeleteResourcePolicyStatementCommandInput, DeleteResourcePolicyStatementCommandOutput } from "./commands/DeleteResourcePolicyStatementCommand";
import { DeleteSlotCommandInput, DeleteSlotCommandOutput } from "./commands/DeleteSlotCommand";
import { DeleteSlotTypeCommandInput, DeleteSlotTypeCommandOutput } from "./commands/DeleteSlotTypeCommand";
import { DescribeBotAliasCommandInput, DescribeBotAliasCommandOutput } from "./commands/DescribeBotAliasCommand";
import { DescribeBotCommandInput, DescribeBotCommandOutput } from "./commands/DescribeBotCommand";
import { DescribeBotLocaleCommandInput, DescribeBotLocaleCommandOutput } from "./commands/DescribeBotLocaleCommand";
import { DescribeBotVersionCommandInput, DescribeBotVersionCommandOutput } from "./commands/DescribeBotVersionCommand";
import { DescribeExportCommandInput, DescribeExportCommandOutput } from "./commands/DescribeExportCommand";
import { DescribeImportCommandInput, DescribeImportCommandOutput } from "./commands/DescribeImportCommand";
import { DescribeIntentCommandInput, DescribeIntentCommandOutput } from "./commands/DescribeIntentCommand";
import { DescribeResourcePolicyCommandInput, DescribeResourcePolicyCommandOutput } from "./commands/DescribeResourcePolicyCommand";
import { DescribeSlotCommandInput, DescribeSlotCommandOutput } from "./commands/DescribeSlotCommand";
import { DescribeSlotTypeCommandInput, DescribeSlotTypeCommandOutput } from "./commands/DescribeSlotTypeCommand";
import { ListBotAliasesCommandInput, ListBotAliasesCommandOutput } from "./commands/ListBotAliasesCommand";
import { ListBotLocalesCommandInput, ListBotLocalesCommandOutput } from "./commands/ListBotLocalesCommand";
import { ListBotVersionsCommandInput, ListBotVersionsCommandOutput } from "./commands/ListBotVersionsCommand";
import { ListBotsCommandInput, ListBotsCommandOutput } from "./commands/ListBotsCommand";
import { ListBuiltInIntentsCommandInput, ListBuiltInIntentsCommandOutput } from "./commands/ListBuiltInIntentsCommand";
import { ListBuiltInSlotTypesCommandInput, ListBuiltInSlotTypesCommandOutput } from "./commands/ListBuiltInSlotTypesCommand";
import { ListExportsCommandInput, ListExportsCommandOutput } from "./commands/ListExportsCommand";
import { ListImportsCommandInput, ListImportsCommandOutput } from "./commands/ListImportsCommand";
import { ListIntentsCommandInput, ListIntentsCommandOutput } from "./commands/ListIntentsCommand";
import { ListSlotTypesCommandInput, ListSlotTypesCommandOutput } from "./commands/ListSlotTypesCommand";
import { ListSlotsCommandInput, ListSlotsCommandOutput } from "./commands/ListSlotsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { StartImportCommandInput, StartImportCommandOutput } from "./commands/StartImportCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateBotAliasCommandInput, UpdateBotAliasCommandOutput } from "./commands/UpdateBotAliasCommand";
import { UpdateBotCommandInput, UpdateBotCommandOutput } from "./commands/UpdateBotCommand";
import { UpdateBotLocaleCommandInput, UpdateBotLocaleCommandOutput } from "./commands/UpdateBotLocaleCommand";
import { UpdateExportCommandInput, UpdateExportCommandOutput } from "./commands/UpdateExportCommand";
import { UpdateIntentCommandInput, UpdateIntentCommandOutput } from "./commands/UpdateIntentCommand";
import { UpdateResourcePolicyCommandInput, UpdateResourcePolicyCommandOutput } from "./commands/UpdateResourcePolicyCommand";
import { UpdateSlotCommandInput, UpdateSlotCommandOutput } from "./commands/UpdateSlotCommand";
import { UpdateSlotTypeCommandInput, UpdateSlotTypeCommandOutput } from "./commands/UpdateSlotTypeCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p></p>
 */
export declare class LexModelsV2 extends LexModelsV2Client {
    /**
     * <p>Builds a bot, its intents, and its slot types into a specific
     *          locale. A bot can be built into multiple locales. At runtime the locale
     *          is used to choose a specific build of the bot.</p>
     */
    buildBotLocale(args: BuildBotLocaleCommandInput, options?: __HttpHandlerOptions): Promise<BuildBotLocaleCommandOutput>;
    buildBotLocale(args: BuildBotLocaleCommandInput, cb: (err: any, data?: BuildBotLocaleCommandOutput) => void): void;
    buildBotLocale(args: BuildBotLocaleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BuildBotLocaleCommandOutput) => void): void;
    /**
     * <p>Creates an Amazon Lex conversational bot. </p>
     */
    createBot(args: CreateBotCommandInput, options?: __HttpHandlerOptions): Promise<CreateBotCommandOutput>;
    createBot(args: CreateBotCommandInput, cb: (err: any, data?: CreateBotCommandOutput) => void): void;
    createBot(args: CreateBotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateBotCommandOutput) => void): void;
    /**
     * <p>Creates an alias for the specified version of a bot. Use an alias to
     *          enable you to change the version of a bot without updating applications
     *          that use the bot.</p>
     *          <p>For example, you can create an alias called "PROD" that your
     *          applications use to call the Amazon Lex bot. </p>
     */
    createBotAlias(args: CreateBotAliasCommandInput, options?: __HttpHandlerOptions): Promise<CreateBotAliasCommandOutput>;
    createBotAlias(args: CreateBotAliasCommandInput, cb: (err: any, data?: CreateBotAliasCommandOutput) => void): void;
    createBotAlias(args: CreateBotAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateBotAliasCommandOutput) => void): void;
    /**
     * <p>Creates a locale in the bot. The locale contains the intents and
     *          slot types that the bot uses in conversations with users in the
     *          specified language and locale. You must add a locale to a bot before
     *          you can add intents and slot types to the bot.</p>
     */
    createBotLocale(args: CreateBotLocaleCommandInput, options?: __HttpHandlerOptions): Promise<CreateBotLocaleCommandOutput>;
    createBotLocale(args: CreateBotLocaleCommandInput, cb: (err: any, data?: CreateBotLocaleCommandOutput) => void): void;
    createBotLocale(args: CreateBotLocaleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateBotLocaleCommandOutput) => void): void;
    /**
     * <p>Creates a new version of the bot based on the <code>DRAFT</code>
     *          version. If the <code>DRAFT</code> version of this resource hasn't
     *          changed since you created the last version, Amazon Lex doesn't create a new
     *          version, it returns the last created version.</p>
     *          <p>When you create the first version of a bot, Amazon Lex sets the version
     *          to 1. Subsequent versions increment by 1.</p>
     */
    createBotVersion(args: CreateBotVersionCommandInput, options?: __HttpHandlerOptions): Promise<CreateBotVersionCommandOutput>;
    createBotVersion(args: CreateBotVersionCommandInput, cb: (err: any, data?: CreateBotVersionCommandOutput) => void): void;
    createBotVersion(args: CreateBotVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateBotVersionCommandOutput) => void): void;
    /**
     * <p>Creates a zip archive containing the contents of a bot or a bot
     *          locale. The archive contains a directory structure that contains JSON
     *          files that define the bot.</p>
     *          <p>You can create an archive that contains the complete definition of a
     *          bot, or you can specify that the archive contain only the definition of
     *          a single bot locale.</p>
     *          <p>For more information about exporting bots, and about the structure
     *          of the export archive, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/importing-exporting.html"> Importing and
     *             exporting bots </a>
     *          </p>
     */
    createExport(args: CreateExportCommandInput, options?: __HttpHandlerOptions): Promise<CreateExportCommandOutput>;
    createExport(args: CreateExportCommandInput, cb: (err: any, data?: CreateExportCommandOutput) => void): void;
    createExport(args: CreateExportCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateExportCommandOutput) => void): void;
    /**
     * <p>Creates an intent.</p>
     *          <p>To define the interaction between the user and your bot, you define
     *          one or more intents. For example, for a pizza ordering bot you would
     *          create an <code>OrderPizza</code> intent.</p>
     *          <p>When you create an intent, you must provide a name. You can
     *          optionally provide the following:</p>
     *          <ul>
     *             <li>
     *                <p>Sample utterances. For example, "I want to order a pizza" and
     *                "Can I order a pizza." You can't provide utterances for built-in
     *                intents.</p>
     *             </li>
     *             <li>
     *                <p>Information to be gathered. You specify slots for the
     *                information that you bot requests from the user. You can specify
     *                standard slot types, such as date and time, or custom slot types
     *                for your application.</p>
     *             </li>
     *             <li>
     *                <p>How the intent is fulfilled. You can provide a Lambda function
     *                or configure the intent to return the intent information to your
     *                client application. If you use a Lambda function, Amazon Lex invokes
     *                the function when all of the intent information is
     *                available.</p>
     *             </li>
     *             <li>
     *                <p>A confirmation prompt to send to the user to confirm an
     *                intent. For example, "Shall I order your pizza?"</p>
     *             </li>
     *             <li>
     *                <p>A conclusion statement to send to the user after the intent is
     *                fulfilled. For example, "I ordered your pizza."</p>
     *             </li>
     *             <li>
     *                <p>A follow-up prompt that asks the user for additional activity.
     *                For example, "Do you want a drink with your pizza?"</p>
     *             </li>
     *          </ul>
     */
    createIntent(args: CreateIntentCommandInput, options?: __HttpHandlerOptions): Promise<CreateIntentCommandOutput>;
    createIntent(args: CreateIntentCommandInput, cb: (err: any, data?: CreateIntentCommandOutput) => void): void;
    createIntent(args: CreateIntentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateIntentCommandOutput) => void): void;
    /**
     * <p>Creates a new resource policy with the specified policy
     *          statements.</p>
     */
    createResourcePolicy(args: CreateResourcePolicyCommandInput, options?: __HttpHandlerOptions): Promise<CreateResourcePolicyCommandOutput>;
    createResourcePolicy(args: CreateResourcePolicyCommandInput, cb: (err: any, data?: CreateResourcePolicyCommandOutput) => void): void;
    createResourcePolicy(args: CreateResourcePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateResourcePolicyCommandOutput) => void): void;
    /**
     * <p>Adds a new resource policy statement to a bot or bot alias. If a
     *          resource policy exists, the statement is added to the current resource
     *          policy. If a policy doesn't exist, a new policy is created.</p>
     *          <p>You can create a resource policy statement that allows cross-account
     *          access.</p>
     */
    createResourcePolicyStatement(args: CreateResourcePolicyStatementCommandInput, options?: __HttpHandlerOptions): Promise<CreateResourcePolicyStatementCommandOutput>;
    createResourcePolicyStatement(args: CreateResourcePolicyStatementCommandInput, cb: (err: any, data?: CreateResourcePolicyStatementCommandOutput) => void): void;
    createResourcePolicyStatement(args: CreateResourcePolicyStatementCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateResourcePolicyStatementCommandOutput) => void): void;
    /**
     * <p>Creates a slot in an intent. A slot is a variable needed to fulfill
     *          an intent. For example, an <code>OrderPizza</code> intent might need
     *          slots for size, crust, and number of pizzas. For each slot, you define
     *          one or more utterances that Amazon Lex uses to elicit a response from the
     *          user. </p>
     */
    createSlot(args: CreateSlotCommandInput, options?: __HttpHandlerOptions): Promise<CreateSlotCommandOutput>;
    createSlot(args: CreateSlotCommandInput, cb: (err: any, data?: CreateSlotCommandOutput) => void): void;
    createSlot(args: CreateSlotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSlotCommandOutput) => void): void;
    /**
     * <p>Creates a custom slot type</p>
     *          <p> To create a custom slot type, specify a name for the slot type and
     *          a set of enumeration values, the values that a slot of this type can
     *          assume. </p>
     */
    createSlotType(args: CreateSlotTypeCommandInput, options?: __HttpHandlerOptions): Promise<CreateSlotTypeCommandOutput>;
    createSlotType(args: CreateSlotTypeCommandInput, cb: (err: any, data?: CreateSlotTypeCommandOutput) => void): void;
    createSlotType(args: CreateSlotTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSlotTypeCommandOutput) => void): void;
    /**
     * <p>Gets a pre-signed S3 write URL that you use to upload the zip
     *          archive when importing a bot or a bot locale. </p>
     */
    createUploadUrl(args: CreateUploadUrlCommandInput, options?: __HttpHandlerOptions): Promise<CreateUploadUrlCommandOutput>;
    createUploadUrl(args: CreateUploadUrlCommandInput, cb: (err: any, data?: CreateUploadUrlCommandOutput) => void): void;
    createUploadUrl(args: CreateUploadUrlCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateUploadUrlCommandOutput) => void): void;
    /**
     * <p>Deletes all versions of a bot, including the <code>Draft</code>
     *          version. To delete a specific version, use the
     *             <code>DeleteBotVersion</code> operation.</p>
     *          <p>When you delete a bot, all of the resources contained in the bot are
     *          also deleted. Deleting a bot removes all locales, intents, slot, and
     *          slot types defined for the bot.</p>
     *          <p>If a bot has an alias, the <code>DeleteBot</code> operation returns
     *          a <code>ResourceInUseException</code> exception. If you want to delete
     *          the bot and the alias, set the <code>skipResourceInUseCheck</code>
     *          parameter to <code>true</code>.</p>
     */
    deleteBot(args: DeleteBotCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBotCommandOutput>;
    deleteBot(args: DeleteBotCommandInput, cb: (err: any, data?: DeleteBotCommandOutput) => void): void;
    deleteBot(args: DeleteBotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteBotCommandOutput) => void): void;
    /**
     * <p>Deletes the specified bot alias.</p>
     */
    deleteBotAlias(args: DeleteBotAliasCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBotAliasCommandOutput>;
    deleteBotAlias(args: DeleteBotAliasCommandInput, cb: (err: any, data?: DeleteBotAliasCommandOutput) => void): void;
    deleteBotAlias(args: DeleteBotAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteBotAliasCommandOutput) => void): void;
    /**
     * <p>Removes a locale from a bot.</p>
     *          <p>When you delete a locale, all intents, slots, and slot types defined
     *          for the locale are also deleted.</p>
     */
    deleteBotLocale(args: DeleteBotLocaleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBotLocaleCommandOutput>;
    deleteBotLocale(args: DeleteBotLocaleCommandInput, cb: (err: any, data?: DeleteBotLocaleCommandOutput) => void): void;
    deleteBotLocale(args: DeleteBotLocaleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteBotLocaleCommandOutput) => void): void;
    /**
     * <p>Deletes a specific version of a bot. To delete all version of a bot,
     *          use the <a>DeleteBot</a> operation.</p>
     */
    deleteBotVersion(args: DeleteBotVersionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBotVersionCommandOutput>;
    deleteBotVersion(args: DeleteBotVersionCommandInput, cb: (err: any, data?: DeleteBotVersionCommandOutput) => void): void;
    deleteBotVersion(args: DeleteBotVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteBotVersionCommandOutput) => void): void;
    /**
     * <p>Removes a previous export and the associated files stored in an S3
     *          bucket.</p>
     */
    deleteExport(args: DeleteExportCommandInput, options?: __HttpHandlerOptions): Promise<DeleteExportCommandOutput>;
    deleteExport(args: DeleteExportCommandInput, cb: (err: any, data?: DeleteExportCommandOutput) => void): void;
    deleteExport(args: DeleteExportCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteExportCommandOutput) => void): void;
    /**
     * <p>Removes a previous import and the associated file stored in an S3
     *          bucket.</p>
     */
    deleteImport(args: DeleteImportCommandInput, options?: __HttpHandlerOptions): Promise<DeleteImportCommandOutput>;
    deleteImport(args: DeleteImportCommandInput, cb: (err: any, data?: DeleteImportCommandOutput) => void): void;
    deleteImport(args: DeleteImportCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteImportCommandOutput) => void): void;
    /**
     * <p>Removes the specified intent.</p>
     *          <p>Deleting an intent also deletes the slots associated with the
     *          intent.</p>
     */
    deleteIntent(args: DeleteIntentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteIntentCommandOutput>;
    deleteIntent(args: DeleteIntentCommandInput, cb: (err: any, data?: DeleteIntentCommandOutput) => void): void;
    deleteIntent(args: DeleteIntentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteIntentCommandOutput) => void): void;
    /**
     * <p>Removes an existing policy from a bot or bot alias. If the resource
     *          doesn't have a policy attached, Amazon Lex returns an exception.</p>
     */
    deleteResourcePolicy(args: DeleteResourcePolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteResourcePolicyCommandOutput>;
    deleteResourcePolicy(args: DeleteResourcePolicyCommandInput, cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void): void;
    deleteResourcePolicy(args: DeleteResourcePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void): void;
    /**
     * <p>Deletes a policy statement from a resource policy. If you delete the
     *          last statement from a policy, the policy is deleted. If you specify a
     *          statement ID that doesn't exist in the policy, or if the bot or bot
     *          alias doesn't have a policy attached, Amazon Lex returns an
     *          exception.</p>
     */
    deleteResourcePolicyStatement(args: DeleteResourcePolicyStatementCommandInput, options?: __HttpHandlerOptions): Promise<DeleteResourcePolicyStatementCommandOutput>;
    deleteResourcePolicyStatement(args: DeleteResourcePolicyStatementCommandInput, cb: (err: any, data?: DeleteResourcePolicyStatementCommandOutput) => void): void;
    deleteResourcePolicyStatement(args: DeleteResourcePolicyStatementCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteResourcePolicyStatementCommandOutput) => void): void;
    /**
     * <p>Deletes the specified slot from an intent.</p>
     */
    deleteSlot(args: DeleteSlotCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSlotCommandOutput>;
    deleteSlot(args: DeleteSlotCommandInput, cb: (err: any, data?: DeleteSlotCommandOutput) => void): void;
    deleteSlot(args: DeleteSlotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSlotCommandOutput) => void): void;
    /**
     * <p>Deletes a slot type from a bot locale.</p>
     *          <p>If a slot is using the slot type, Amazon Lex throws a
     *             <code>ResourceInUseException</code> exception. To avoid the
     *          exception, set the <code>skipResourceInUseCheck</code> parameter to
     *             <code>true</code>.</p>
     */
    deleteSlotType(args: DeleteSlotTypeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSlotTypeCommandOutput>;
    deleteSlotType(args: DeleteSlotTypeCommandInput, cb: (err: any, data?: DeleteSlotTypeCommandOutput) => void): void;
    deleteSlotType(args: DeleteSlotTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSlotTypeCommandOutput) => void): void;
    /**
     * <p>Provides metadata information about a bot. </p>
     */
    describeBot(args: DescribeBotCommandInput, options?: __HttpHandlerOptions): Promise<DescribeBotCommandOutput>;
    describeBot(args: DescribeBotCommandInput, cb: (err: any, data?: DescribeBotCommandOutput) => void): void;
    describeBot(args: DescribeBotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeBotCommandOutput) => void): void;
    /**
     * <p>Get information about a specific bot alias.</p>
     */
    describeBotAlias(args: DescribeBotAliasCommandInput, options?: __HttpHandlerOptions): Promise<DescribeBotAliasCommandOutput>;
    describeBotAlias(args: DescribeBotAliasCommandInput, cb: (err: any, data?: DescribeBotAliasCommandOutput) => void): void;
    describeBotAlias(args: DescribeBotAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeBotAliasCommandOutput) => void): void;
    /**
     * <p>Describes the settings that a bot has for a specific locale. </p>
     */
    describeBotLocale(args: DescribeBotLocaleCommandInput, options?: __HttpHandlerOptions): Promise<DescribeBotLocaleCommandOutput>;
    describeBotLocale(args: DescribeBotLocaleCommandInput, cb: (err: any, data?: DescribeBotLocaleCommandOutput) => void): void;
    describeBotLocale(args: DescribeBotLocaleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeBotLocaleCommandOutput) => void): void;
    /**
     * <p>Provides metadata about a version of a bot.</p>
     */
    describeBotVersion(args: DescribeBotVersionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeBotVersionCommandOutput>;
    describeBotVersion(args: DescribeBotVersionCommandInput, cb: (err: any, data?: DescribeBotVersionCommandOutput) => void): void;
    describeBotVersion(args: DescribeBotVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeBotVersionCommandOutput) => void): void;
    /**
     * <p>Gets information about a specific export.</p>
     */
    describeExport(args: DescribeExportCommandInput, options?: __HttpHandlerOptions): Promise<DescribeExportCommandOutput>;
    describeExport(args: DescribeExportCommandInput, cb: (err: any, data?: DescribeExportCommandOutput) => void): void;
    describeExport(args: DescribeExportCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeExportCommandOutput) => void): void;
    /**
     * <p>Gets information about a specific import.</p>
     */
    describeImport(args: DescribeImportCommandInput, options?: __HttpHandlerOptions): Promise<DescribeImportCommandOutput>;
    describeImport(args: DescribeImportCommandInput, cb: (err: any, data?: DescribeImportCommandOutput) => void): void;
    describeImport(args: DescribeImportCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeImportCommandOutput) => void): void;
    /**
     * <p>Returns metadata about an intent.</p>
     */
    describeIntent(args: DescribeIntentCommandInput, options?: __HttpHandlerOptions): Promise<DescribeIntentCommandOutput>;
    describeIntent(args: DescribeIntentCommandInput, cb: (err: any, data?: DescribeIntentCommandOutput) => void): void;
    describeIntent(args: DescribeIntentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeIntentCommandOutput) => void): void;
    /**
     * <p>Gets the resource policy and policy revision for a bot or bot
     *          alias.</p>
     */
    describeResourcePolicy(args: DescribeResourcePolicyCommandInput, options?: __HttpHandlerOptions): Promise<DescribeResourcePolicyCommandOutput>;
    describeResourcePolicy(args: DescribeResourcePolicyCommandInput, cb: (err: any, data?: DescribeResourcePolicyCommandOutput) => void): void;
    describeResourcePolicy(args: DescribeResourcePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeResourcePolicyCommandOutput) => void): void;
    /**
     * <p>Gets metadata information about a slot.</p>
     */
    describeSlot(args: DescribeSlotCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSlotCommandOutput>;
    describeSlot(args: DescribeSlotCommandInput, cb: (err: any, data?: DescribeSlotCommandOutput) => void): void;
    describeSlot(args: DescribeSlotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSlotCommandOutput) => void): void;
    /**
     * <p>Gets metadata information about a slot type.</p>
     */
    describeSlotType(args: DescribeSlotTypeCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSlotTypeCommandOutput>;
    describeSlotType(args: DescribeSlotTypeCommandInput, cb: (err: any, data?: DescribeSlotTypeCommandOutput) => void): void;
    describeSlotType(args: DescribeSlotTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSlotTypeCommandOutput) => void): void;
    /**
     * <p>Gets a list of aliases for the specified bot.</p>
     */
    listBotAliases(args: ListBotAliasesCommandInput, options?: __HttpHandlerOptions): Promise<ListBotAliasesCommandOutput>;
    listBotAliases(args: ListBotAliasesCommandInput, cb: (err: any, data?: ListBotAliasesCommandOutput) => void): void;
    listBotAliases(args: ListBotAliasesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListBotAliasesCommandOutput) => void): void;
    /**
     * <p>Gets a list of locales for the specified bot.</p>
     */
    listBotLocales(args: ListBotLocalesCommandInput, options?: __HttpHandlerOptions): Promise<ListBotLocalesCommandOutput>;
    listBotLocales(args: ListBotLocalesCommandInput, cb: (err: any, data?: ListBotLocalesCommandOutput) => void): void;
    listBotLocales(args: ListBotLocalesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListBotLocalesCommandOutput) => void): void;
    /**
     * <p>Gets a list of available bots.</p>
     */
    listBots(args: ListBotsCommandInput, options?: __HttpHandlerOptions): Promise<ListBotsCommandOutput>;
    listBots(args: ListBotsCommandInput, cb: (err: any, data?: ListBotsCommandOutput) => void): void;
    listBots(args: ListBotsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListBotsCommandOutput) => void): void;
    /**
     * <p>Gets information about all of the versions of a bot.</p>
     *          <p>The <code>ListBotVersions</code> operation returns a summary of each
     *          version of a bot. For example, if a bot has three numbered versions,
     *          the <code>ListBotVersions</code> operation returns for summaries, one
     *          for each numbered version and one for the <code>DRAFT</code>
     *          version.</p>
     *          <p>The <code>ListBotVersions</code> operation always returns at least
     *          one version, the <code>DRAFT</code> version.</p>
     */
    listBotVersions(args: ListBotVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListBotVersionsCommandOutput>;
    listBotVersions(args: ListBotVersionsCommandInput, cb: (err: any, data?: ListBotVersionsCommandOutput) => void): void;
    listBotVersions(args: ListBotVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListBotVersionsCommandOutput) => void): void;
    /**
     * <p>Gets a list of built-in intents provided by Amazon Lex that you can use
     *          in your bot. </p>
     *          <p>To use a built-in intent as a the base for your own intent, include
     *          the built-in intent signature in the <code>parentIntentSignature</code>
     *          parameter when you call the <code>CreateIntent</code> operation. For
     *          more information, see <a>CreateIntent</a>.</p>
     */
    listBuiltInIntents(args: ListBuiltInIntentsCommandInput, options?: __HttpHandlerOptions): Promise<ListBuiltInIntentsCommandOutput>;
    listBuiltInIntents(args: ListBuiltInIntentsCommandInput, cb: (err: any, data?: ListBuiltInIntentsCommandOutput) => void): void;
    listBuiltInIntents(args: ListBuiltInIntentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListBuiltInIntentsCommandOutput) => void): void;
    /**
     * <p>Gets a list of built-in slot types that meet the specified
     *          criteria.</p>
     */
    listBuiltInSlotTypes(args: ListBuiltInSlotTypesCommandInput, options?: __HttpHandlerOptions): Promise<ListBuiltInSlotTypesCommandOutput>;
    listBuiltInSlotTypes(args: ListBuiltInSlotTypesCommandInput, cb: (err: any, data?: ListBuiltInSlotTypesCommandOutput) => void): void;
    listBuiltInSlotTypes(args: ListBuiltInSlotTypesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListBuiltInSlotTypesCommandOutput) => void): void;
    /**
     * <p>Lists the exports for a bot or bot locale. Exports are kept in the list for 7
     *          days.</p>
     */
    listExports(args: ListExportsCommandInput, options?: __HttpHandlerOptions): Promise<ListExportsCommandOutput>;
    listExports(args: ListExportsCommandInput, cb: (err: any, data?: ListExportsCommandOutput) => void): void;
    listExports(args: ListExportsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListExportsCommandOutput) => void): void;
    /**
     * <p>Lists the imports for a bot or bot locale. Imports are kept in the list for 7
     *          days.</p>
     */
    listImports(args: ListImportsCommandInput, options?: __HttpHandlerOptions): Promise<ListImportsCommandOutput>;
    listImports(args: ListImportsCommandInput, cb: (err: any, data?: ListImportsCommandOutput) => void): void;
    listImports(args: ListImportsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListImportsCommandOutput) => void): void;
    /**
     * <p>Get a list of intents that meet the specified criteria.</p>
     */
    listIntents(args: ListIntentsCommandInput, options?: __HttpHandlerOptions): Promise<ListIntentsCommandOutput>;
    listIntents(args: ListIntentsCommandInput, cb: (err: any, data?: ListIntentsCommandOutput) => void): void;
    listIntents(args: ListIntentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListIntentsCommandOutput) => void): void;
    /**
     * <p>Gets a list of slots that match the specified criteria.</p>
     */
    listSlots(args: ListSlotsCommandInput, options?: __HttpHandlerOptions): Promise<ListSlotsCommandOutput>;
    listSlots(args: ListSlotsCommandInput, cb: (err: any, data?: ListSlotsCommandOutput) => void): void;
    listSlots(args: ListSlotsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSlotsCommandOutput) => void): void;
    /**
     * <p>Gets a list of slot types that match the specified criteria.</p>
     */
    listSlotTypes(args: ListSlotTypesCommandInput, options?: __HttpHandlerOptions): Promise<ListSlotTypesCommandOutput>;
    listSlotTypes(args: ListSlotTypesCommandInput, cb: (err: any, data?: ListSlotTypesCommandOutput) => void): void;
    listSlotTypes(args: ListSlotTypesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSlotTypesCommandOutput) => void): void;
    /**
     * <p>Gets a list of tags associated with a resource. Only bots, bot
     *          aliases, and bot channels can have tags associated with them.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Starts importing a bot or bot locale from a zip archive that you
     *          uploaded to an S3 bucket.</p>
     */
    startImport(args: StartImportCommandInput, options?: __HttpHandlerOptions): Promise<StartImportCommandOutput>;
    startImport(args: StartImportCommandInput, cb: (err: any, data?: StartImportCommandOutput) => void): void;
    startImport(args: StartImportCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartImportCommandOutput) => void): void;
    /**
     * <p>Adds the specified tags to the specified resource. If a tag key
     *          already exists, the existing value is replaced with the new
     *          value.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes tags from a bot, bot alias, or bot channel.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates the configuration of an existing bot. </p>
     */
    updateBot(args: UpdateBotCommandInput, options?: __HttpHandlerOptions): Promise<UpdateBotCommandOutput>;
    updateBot(args: UpdateBotCommandInput, cb: (err: any, data?: UpdateBotCommandOutput) => void): void;
    updateBot(args: UpdateBotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateBotCommandOutput) => void): void;
    /**
     * <p>Updates the configuration of an existing bot alias.</p>
     */
    updateBotAlias(args: UpdateBotAliasCommandInput, options?: __HttpHandlerOptions): Promise<UpdateBotAliasCommandOutput>;
    updateBotAlias(args: UpdateBotAliasCommandInput, cb: (err: any, data?: UpdateBotAliasCommandOutput) => void): void;
    updateBotAlias(args: UpdateBotAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateBotAliasCommandOutput) => void): void;
    /**
     * <p>Updates the settings that a bot has for a specific locale.</p>
     */
    updateBotLocale(args: UpdateBotLocaleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateBotLocaleCommandOutput>;
    updateBotLocale(args: UpdateBotLocaleCommandInput, cb: (err: any, data?: UpdateBotLocaleCommandOutput) => void): void;
    updateBotLocale(args: UpdateBotLocaleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateBotLocaleCommandOutput) => void): void;
    /**
     * <p>Updates the password used to encrypt an export zip archive.</p>
     */
    updateExport(args: UpdateExportCommandInput, options?: __HttpHandlerOptions): Promise<UpdateExportCommandOutput>;
    updateExport(args: UpdateExportCommandInput, cb: (err: any, data?: UpdateExportCommandOutput) => void): void;
    updateExport(args: UpdateExportCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateExportCommandOutput) => void): void;
    /**
     * <p>Updates the settings for an intent.</p>
     */
    updateIntent(args: UpdateIntentCommandInput, options?: __HttpHandlerOptions): Promise<UpdateIntentCommandOutput>;
    updateIntent(args: UpdateIntentCommandInput, cb: (err: any, data?: UpdateIntentCommandOutput) => void): void;
    updateIntent(args: UpdateIntentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateIntentCommandOutput) => void): void;
    /**
     * <p>Replaces the existing resource policy for a bot or bot alias with a
     *          new one. If the policy doesn't exist, Amazon Lex returns an
     *          exception.</p>
     */
    updateResourcePolicy(args: UpdateResourcePolicyCommandInput, options?: __HttpHandlerOptions): Promise<UpdateResourcePolicyCommandOutput>;
    updateResourcePolicy(args: UpdateResourcePolicyCommandInput, cb: (err: any, data?: UpdateResourcePolicyCommandOutput) => void): void;
    updateResourcePolicy(args: UpdateResourcePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateResourcePolicyCommandOutput) => void): void;
    /**
     * <p>Updates the settings for a slot.</p>
     */
    updateSlot(args: UpdateSlotCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSlotCommandOutput>;
    updateSlot(args: UpdateSlotCommandInput, cb: (err: any, data?: UpdateSlotCommandOutput) => void): void;
    updateSlot(args: UpdateSlotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateSlotCommandOutput) => void): void;
    /**
     * <p>Updates the configuration of an existing slot type.</p>
     */
    updateSlotType(args: UpdateSlotTypeCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSlotTypeCommandOutput>;
    updateSlotType(args: UpdateSlotTypeCommandInput, cb: (err: any, data?: UpdateSlotTypeCommandOutput) => void): void;
    updateSlotType(args: UpdateSlotTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateSlotTypeCommandOutput) => void): void;
}
