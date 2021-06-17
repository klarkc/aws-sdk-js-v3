import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>There is an error in the call or in a SQL statement.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
    name: "BadRequestException";
    $fault: "client";
    /**
     * <p>The error message returned by this <code>BadRequestException</code> error.</p>
     */
    message?: string;
}
export declare namespace BadRequestException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BadRequestException) => any;
}
export declare enum TypeHint {
    DATE = "DATE",
    DECIMAL = "DECIMAL",
    JSON = "JSON",
    TIME = "TIME",
    TIMESTAMP = "TIMESTAMP",
    UUID = "UUID"
}
/**
 * <p>There are insufficient privileges to make the call.</p>
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
    name: "ForbiddenException";
    $fault: "client";
    /**
     * <p>The error message returned by this <code>ForbiddenException</code> error.</p>
     */
    message?: string;
}
export declare namespace ForbiddenException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ForbiddenException) => any;
}
/**
 * <p>An internal error occurred.</p>
 */
export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
    name: "InternalServerErrorException";
    $fault: "server";
}
export declare namespace InternalServerErrorException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalServerErrorException) => any;
}
/**
 * <p>The service specified by the <code>resourceArn</code> parameter is not
 *             available.</p>
 */
export interface ServiceUnavailableError extends __SmithyException, $MetadataBearer {
    name: "ServiceUnavailableError";
    $fault: "server";
}
export declare namespace ServiceUnavailableError {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceUnavailableError) => any;
}
/**
 * <p>The execution of the SQL statement timed out.</p>
 */
export interface StatementTimeoutException extends __SmithyException, $MetadataBearer {
    name: "StatementTimeoutException";
    $fault: "client";
    /**
     * <p>The error message returned by this <code>StatementTimeoutException</code> error.</p>
     */
    message?: string;
    /**
     * <p>The database connection ID that executed the SQL statement.</p>
     */
    dbConnectionId?: number;
}
export declare namespace StatementTimeoutException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StatementTimeoutException) => any;
}
/**
 * <p>The request parameters represent the input of a request to start a SQL
 *             transaction.</p>
 */
export interface BeginTransactionRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>The name or ARN of the secret that enables access to the DB cluster.</p>
     */
    secretArn: string | undefined;
    /**
     * <p>The name of the database.</p>
     */
    database?: string;
    /**
     * <p>The name of the database schema.</p>
     */
    schema?: string;
}
export declare namespace BeginTransactionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BeginTransactionRequest) => any;
}
/**
 * <p>The response elements represent the output of a request to start a SQL
 *             transaction.</p>
 */
export interface BeginTransactionResponse {
    /**
     * <p>The transaction ID of the transaction started by the call.</p>
     */
    transactionId?: string;
}
export declare namespace BeginTransactionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BeginTransactionResponse) => any;
}
/**
 * <p>Contains the metadata for a column.</p>
 */
export interface ColumnMetadata {
    /**
     * <p>The name of the column.</p>
     */
    name?: string;
    /**
     * <p>The type of the column.</p>
     */
    type?: number;
    /**
     * <p>The database-specific data type of the column.</p>
     */
    typeName?: string;
    /**
     * <p>The label for the column.</p>
     */
    label?: string;
    /**
     * <p>The name of the schema that owns the table that includes the column.</p>
     */
    schemaName?: string;
    /**
     * <p>The name of the table that includes the column.</p>
     */
    tableName?: string;
    /**
     * <p>A value that indicates whether the column increments automatically.</p>
     */
    isAutoIncrement?: boolean;
    /**
     * <p>A value that indicates whether an integer column is signed.</p>
     */
    isSigned?: boolean;
    /**
     * <p>A value that indicates whether the column contains currency values.</p>
     */
    isCurrency?: boolean;
    /**
     * <p>A value that indicates whether the column is case-sensitive.</p>
     */
    isCaseSensitive?: boolean;
    /**
     * <p>A value that indicates whether the column is nullable.</p>
     */
    nullable?: number;
    /**
     * <p>The precision value of a decimal number column.</p>
     */
    precision?: number;
    /**
     * <p>The scale value of a decimal number column.</p>
     */
    scale?: number;
    /**
     * <p>The type of the column.</p>
     */
    arrayBaseColumnType?: number;
}
export declare namespace ColumnMetadata {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ColumnMetadata) => any;
}
/**
 * <p>The request parameters represent the input of a commit transaction request.</p>
 */
export interface CommitTransactionRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>The name or ARN of the secret that enables access to the DB cluster.</p>
     */
    secretArn: string | undefined;
    /**
     * <p>The identifier of the transaction to end and commit.</p>
     */
    transactionId: string | undefined;
}
export declare namespace CommitTransactionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CommitTransactionRequest) => any;
}
/**
 * <p>The response elements represent the output of a commit transaction request.</p>
 */
export interface CommitTransactionResponse {
    /**
     * <p>The status of the commit operation.</p>
     */
    transactionStatus?: string;
}
export declare namespace CommitTransactionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CommitTransactionResponse) => any;
}
/**
 * <p>The <code>resourceArn</code>, <code>secretArn</code>, or <code>transactionId</code> value can't be found.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
    name: "NotFoundException";
    $fault: "client";
    /**
     * <p>The error message returned by this <code>NotFoundException</code> error.</p>
     */
    message?: string;
}
export declare namespace NotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NotFoundException) => any;
}
export declare enum DecimalReturnType {
    DOUBLE_OR_LONG = "DOUBLE_OR_LONG",
    STRING = "STRING"
}
/**
 * <p>The request parameters represent the input of a request to run one or more SQL
 *             statements.</p>
 */
export interface ExecuteSqlRequest {
    /**
     * <p>The ARN of the Aurora Serverless DB cluster.</p>
     */
    dbClusterOrInstanceArn: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the secret that enables access to the DB cluster.</p>
     */
    awsSecretStoreArn: string | undefined;
    /**
     * <p>One or more SQL statements to run on the DB cluster.</p>
     *         <p>You can separate SQL statements from each other with a semicolon (;). Any valid SQL
     *             statement is permitted, including data definition, data manipulation, and commit
     *             statements. </p>
     */
    sqlStatements: string | undefined;
    /**
     * <p>The name of the database.</p>
     */
    database?: string;
    /**
     * <p>The name of the database schema.</p>
     */
    schema?: string;
}
export declare namespace ExecuteSqlRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExecuteSqlRequest) => any;
}
/**
 * <p>The metadata of the result set returned by a SQL statement.</p>
 */
export interface ResultSetMetadata {
    /**
     * <p>The number of columns in the result set.</p>
     */
    columnCount?: number;
    /**
     * <p>The metadata of the columns in the result set.</p>
     */
    columnMetadata?: ColumnMetadata[];
}
export declare namespace ResultSetMetadata {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResultSetMetadata) => any;
}
/**
 * <p>Options that control how the result set is returned.</p>
 */
export interface ResultSetOptions {
    /**
     * <p>A value that indicates how a field of <code>DECIMAL</code> type is represented
     *             in the response. The value of <code>STRING</code>, the default, specifies that
     *             it is converted to a String value. The value of <code>DOUBLE_OR_LONG</code>
     *             specifies that it is converted to a Long value if its scale is 0, or to a Double
     *             value otherwise.</p>
     *         <important>
     *             <p>Conversion to Double or Long can result in roundoff errors due to precision loss.
     *                 We recommend converting to String, especially when working with currency values.</p>
     *         </important>
     */
    decimalReturnType?: DecimalReturnType | string;
}
export declare namespace ResultSetOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResultSetOptions) => any;
}
/**
 * <p>The request parameters represent the input of a request to perform a rollback of a
 *             transaction.</p>
 */
export interface RollbackTransactionRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>The name or ARN of the secret that enables access to the DB cluster.</p>
     */
    secretArn: string | undefined;
    /**
     * <p>The identifier of the transaction to roll back.</p>
     */
    transactionId: string | undefined;
}
export declare namespace RollbackTransactionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RollbackTransactionRequest) => any;
}
/**
 * <p>The response elements represent the output of a request to perform a rollback of a
 *             transaction.</p>
 */
export interface RollbackTransactionResponse {
    /**
     * <p>The status of the rollback operation.</p>
     */
    transactionStatus?: string;
}
export declare namespace RollbackTransactionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RollbackTransactionResponse) => any;
}
/**
 * <p>Contains an array.</p>
 */
export declare type ArrayValue = ArrayValue.ArrayValuesMember | ArrayValue.BooleanValuesMember | ArrayValue.DoubleValuesMember | ArrayValue.LongValuesMember | ArrayValue.StringValuesMember | ArrayValue.$UnknownMember;
export declare namespace ArrayValue {
    /**
     * <p>An array of Boolean values.</p>
     */
    interface BooleanValuesMember {
        booleanValues: boolean[];
        longValues?: never;
        doubleValues?: never;
        stringValues?: never;
        arrayValues?: never;
        $unknown?: never;
    }
    /**
     * <p>An array of floating point numbers.</p>
     */
    interface LongValuesMember {
        booleanValues?: never;
        longValues: number[];
        doubleValues?: never;
        stringValues?: never;
        arrayValues?: never;
        $unknown?: never;
    }
    /**
     * <p>An array of integers.</p>
     */
    interface DoubleValuesMember {
        booleanValues?: never;
        longValues?: never;
        doubleValues: number[];
        stringValues?: never;
        arrayValues?: never;
        $unknown?: never;
    }
    /**
     * <p>An array of strings.</p>
     */
    interface StringValuesMember {
        booleanValues?: never;
        longValues?: never;
        doubleValues?: never;
        stringValues: string[];
        arrayValues?: never;
        $unknown?: never;
    }
    /**
     * <p>An array of arrays.</p>
     */
    interface ArrayValuesMember {
        booleanValues?: never;
        longValues?: never;
        doubleValues?: never;
        stringValues?: never;
        arrayValues: ArrayValue[];
        $unknown?: never;
    }
    interface $UnknownMember {
        booleanValues?: never;
        longValues?: never;
        doubleValues?: never;
        stringValues?: never;
        arrayValues?: never;
        $unknown: [string, any];
    }
    interface Visitor<T> {
        booleanValues: (value: boolean[]) => T;
        longValues: (value: number[]) => T;
        doubleValues: (value: number[]) => T;
        stringValues: (value: string[]) => T;
        arrayValues: (value: ArrayValue[]) => T;
        _: (name: string, value: any) => T;
    }
    const visit: <T>(value: ArrayValue, visitor: Visitor<T>) => T;
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ArrayValue) => any;
}
/**
 * <p>Contains a value.</p>
 */
export declare type Field = Field.ArrayValueMember | Field.BlobValueMember | Field.BooleanValueMember | Field.DoubleValueMember | Field.IsNullMember | Field.LongValueMember | Field.StringValueMember | Field.$UnknownMember;
export declare namespace Field {
    /**
     * <p>A NULL value.</p>
     */
    interface IsNullMember {
        isNull: boolean;
        booleanValue?: never;
        longValue?: never;
        doubleValue?: never;
        stringValue?: never;
        blobValue?: never;
        arrayValue?: never;
        $unknown?: never;
    }
    /**
     * <p>A value of Boolean data type.</p>
     */
    interface BooleanValueMember {
        isNull?: never;
        booleanValue: boolean;
        longValue?: never;
        doubleValue?: never;
        stringValue?: never;
        blobValue?: never;
        arrayValue?: never;
        $unknown?: never;
    }
    /**
     * <p>A value of long data type.</p>
     */
    interface LongValueMember {
        isNull?: never;
        booleanValue?: never;
        longValue: number;
        doubleValue?: never;
        stringValue?: never;
        blobValue?: never;
        arrayValue?: never;
        $unknown?: never;
    }
    /**
     * <p>A value of double data type.</p>
     */
    interface DoubleValueMember {
        isNull?: never;
        booleanValue?: never;
        longValue?: never;
        doubleValue: number;
        stringValue?: never;
        blobValue?: never;
        arrayValue?: never;
        $unknown?: never;
    }
    /**
     * <p>A value of string data type.</p>
     */
    interface StringValueMember {
        isNull?: never;
        booleanValue?: never;
        longValue?: never;
        doubleValue?: never;
        stringValue: string;
        blobValue?: never;
        arrayValue?: never;
        $unknown?: never;
    }
    /**
     * <p>A value of BLOB data type.</p>
     */
    interface BlobValueMember {
        isNull?: never;
        booleanValue?: never;
        longValue?: never;
        doubleValue?: never;
        stringValue?: never;
        blobValue: Uint8Array;
        arrayValue?: never;
        $unknown?: never;
    }
    /**
     * <p>An array of values.</p>
     */
    interface ArrayValueMember {
        isNull?: never;
        booleanValue?: never;
        longValue?: never;
        doubleValue?: never;
        stringValue?: never;
        blobValue?: never;
        arrayValue: ArrayValue;
        $unknown?: never;
    }
    interface $UnknownMember {
        isNull?: never;
        booleanValue?: never;
        longValue?: never;
        doubleValue?: never;
        stringValue?: never;
        blobValue?: never;
        arrayValue?: never;
        $unknown: [string, any];
    }
    interface Visitor<T> {
        isNull: (value: boolean) => T;
        booleanValue: (value: boolean) => T;
        longValue: (value: number) => T;
        doubleValue: (value: number) => T;
        stringValue: (value: string) => T;
        blobValue: (value: Uint8Array) => T;
        arrayValue: (value: ArrayValue) => T;
        _: (name: string, value: any) => T;
    }
    const visit: <T>(value: Field, visitor: Visitor<T>) => T;
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Field) => any;
}
/**
 * <p>A parameter used in a SQL statement.</p>
 */
export interface SqlParameter {
    /**
     * <p>The name of the parameter.</p>
     */
    name?: string;
    /**
     * <p>The value of the parameter.</p>
     */
    value?: Field;
    /**
     * <p>A hint that specifies the correct object type for data type mapping. Possible values
     *             are as follows:</p>
     *         <ul>
     *             <li>
     *                <p>
     *                   <code>DATE</code> - The corresponding <code>String</code> parameter value is sent as an object
     *               of <code>DATE</code> type to the database. The accepted format is <code>YYYY-MM-DD</code>.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>DECIMAL</code> - The corresponding <code>String</code> parameter value is sent as an object
     *                     of <code>DECIMAL</code> type to the database.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>JSON</code> - The corresponding <code>String</code> parameter value is sent as an
     *            object of <code>JSON</code> type to the database.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>TIME</code> - The corresponding <code>String</code> parameter value is sent as an object
     *                     of <code>TIME</code> type to the database. The accepted format is <code>HH:MM:SS[.FFF]</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>TIMESTAMP</code> - The corresponding <code>String</code> parameter value is sent as an object
     *               of <code>TIMESTAMP</code> type to the database. The accepted format is <code>YYYY-MM-DD HH:MM:SS[.FFF]</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>UUID</code> - The corresponding <code>String</code> parameter value is sent as an object of
     *              <code>UUID</code> type to the database.
     *           </p>
     *             </li>
     *          </ul>
     */
    typeHint?: TypeHint | string;
}
export declare namespace SqlParameter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SqlParameter) => any;
}
/**
 * <p>The response elements represent the results of an update.</p>
 */
export interface UpdateResult {
    /**
     * <p>Values for fields generated during the request.</p>
     */
    generatedFields?: Field[];
}
export declare namespace UpdateResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateResult) => any;
}
/**
 * <p>Contains the value of a column.</p>
 *
 *         <important>
 *             <p>This data type is deprecated.</p>
 *         </important>
 */
export declare type Value = Value.ArrayValuesMember | Value.BigIntValueMember | Value.BitValueMember | Value.BlobValueMember | Value.DoubleValueMember | Value.IntValueMember | Value.IsNullMember | Value.RealValueMember | Value.StringValueMember | Value.StructValueMember | Value.$UnknownMember;
export declare namespace Value {
    /**
     * <p>A NULL value.</p>
     */
    interface IsNullMember {
        isNull: boolean;
        bitValue?: never;
        bigIntValue?: never;
        intValue?: never;
        doubleValue?: never;
        realValue?: never;
        stringValue?: never;
        blobValue?: never;
        arrayValues?: never;
        structValue?: never;
        $unknown?: never;
    }
    /**
     * <p>A value for a column of BIT data type.</p>
     */
    interface BitValueMember {
        isNull?: never;
        bitValue: boolean;
        bigIntValue?: never;
        intValue?: never;
        doubleValue?: never;
        realValue?: never;
        stringValue?: never;
        blobValue?: never;
        arrayValues?: never;
        structValue?: never;
        $unknown?: never;
    }
    /**
     * <p>A value for a column of big integer data type.</p>
     */
    interface BigIntValueMember {
        isNull?: never;
        bitValue?: never;
        bigIntValue: number;
        intValue?: never;
        doubleValue?: never;
        realValue?: never;
        stringValue?: never;
        blobValue?: never;
        arrayValues?: never;
        structValue?: never;
        $unknown?: never;
    }
    /**
     * <p>A value for a column of integer data type.</p>
     */
    interface IntValueMember {
        isNull?: never;
        bitValue?: never;
        bigIntValue?: never;
        intValue: number;
        doubleValue?: never;
        realValue?: never;
        stringValue?: never;
        blobValue?: never;
        arrayValues?: never;
        structValue?: never;
        $unknown?: never;
    }
    /**
     * <p>A value for a column of double data type.</p>
     */
    interface DoubleValueMember {
        isNull?: never;
        bitValue?: never;
        bigIntValue?: never;
        intValue?: never;
        doubleValue: number;
        realValue?: never;
        stringValue?: never;
        blobValue?: never;
        arrayValues?: never;
        structValue?: never;
        $unknown?: never;
    }
    /**
     * <p>A value for a column of real data type.</p>
     */
    interface RealValueMember {
        isNull?: never;
        bitValue?: never;
        bigIntValue?: never;
        intValue?: never;
        doubleValue?: never;
        realValue: number;
        stringValue?: never;
        blobValue?: never;
        arrayValues?: never;
        structValue?: never;
        $unknown?: never;
    }
    /**
     * <p>A value for a column of string data type.</p>
     */
    interface StringValueMember {
        isNull?: never;
        bitValue?: never;
        bigIntValue?: never;
        intValue?: never;
        doubleValue?: never;
        realValue?: never;
        stringValue: string;
        blobValue?: never;
        arrayValues?: never;
        structValue?: never;
        $unknown?: never;
    }
    /**
     * <p>A value for a column of BLOB data type.</p>
     */
    interface BlobValueMember {
        isNull?: never;
        bitValue?: never;
        bigIntValue?: never;
        intValue?: never;
        doubleValue?: never;
        realValue?: never;
        stringValue?: never;
        blobValue: Uint8Array;
        arrayValues?: never;
        structValue?: never;
        $unknown?: never;
    }
    /**
     * <p>An array of column values.</p>
     */
    interface ArrayValuesMember {
        isNull?: never;
        bitValue?: never;
        bigIntValue?: never;
        intValue?: never;
        doubleValue?: never;
        realValue?: never;
        stringValue?: never;
        blobValue?: never;
        arrayValues: Value[];
        structValue?: never;
        $unknown?: never;
    }
    /**
     * <p>A value for a column of STRUCT data type.</p>
     */
    interface StructValueMember {
        isNull?: never;
        bitValue?: never;
        bigIntValue?: never;
        intValue?: never;
        doubleValue?: never;
        realValue?: never;
        stringValue?: never;
        blobValue?: never;
        arrayValues?: never;
        structValue: StructValue;
        $unknown?: never;
    }
    interface $UnknownMember {
        isNull?: never;
        bitValue?: never;
        bigIntValue?: never;
        intValue?: never;
        doubleValue?: never;
        realValue?: never;
        stringValue?: never;
        blobValue?: never;
        arrayValues?: never;
        structValue?: never;
        $unknown: [string, any];
    }
    interface Visitor<T> {
        isNull: (value: boolean) => T;
        bitValue: (value: boolean) => T;
        bigIntValue: (value: number) => T;
        intValue: (value: number) => T;
        doubleValue: (value: number) => T;
        realValue: (value: number) => T;
        stringValue: (value: string) => T;
        blobValue: (value: Uint8Array) => T;
        arrayValues: (value: Value[]) => T;
        structValue: (value: StructValue) => T;
        _: (name: string, value: any) => T;
    }
    const visit: <T>(value: Value, visitor: Visitor<T>) => T;
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Value) => any;
}
/**
 * <p>The request parameters represent the input of a request to run a SQL statement against
 *             a database.</p>
 */
export interface ExecuteStatementRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>The name or ARN of the secret that enables access to the DB cluster.</p>
     */
    secretArn: string | undefined;
    /**
     * <p>The SQL statement to run.</p>
     */
    sql: string | undefined;
    /**
     * <p>The name of the database.</p>
     */
    database?: string;
    /**
     * <p>The name of the database schema.</p>
     *         <note>
     *             <p>Currently, the <code>schema</code> parameter isn't supported.</p>
     *         </note>
     */
    schema?: string;
    /**
     * <p>The parameters for the SQL statement.</p>
     *         <note>
     *             <p>Array parameters are not supported.</p>
     *         </note>
     */
    parameters?: SqlParameter[];
    /**
     * <p>The identifier of a transaction that was started by using the
     *                 <code>BeginTransaction</code> operation. Specify the transaction ID of the
     *             transaction that you want to include the SQL statement in.</p>
     *         <p>If the SQL statement is not part of a transaction, don't set this parameter.</p>
     */
    transactionId?: string;
    /**
     * <p>A value that indicates whether to include metadata in the results.</p>
     */
    includeResultMetadata?: boolean;
    /**
     * <p>A value that indicates whether to continue running the statement after
     *             the call times out. By default, the statement stops running when the call
     *             times out.</p>
     *         <important>
     *             <p>For DDL statements, we recommend continuing to run the statement after
     *                the call times out. When a DDL statement terminates before it is finished
     *                running, it can result in errors and possibly corrupted data structures.</p>
     *         </important>
     */
    continueAfterTimeout?: boolean;
    /**
     * <p>Options that control how the result set is returned.</p>
     */
    resultSetOptions?: ResultSetOptions;
}
export declare namespace ExecuteStatementRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExecuteStatementRequest) => any;
}
/**
 * <p>A structure value returned by a call.</p>
 */
export interface StructValue {
    /**
     * <p>The attributes returned in the record.</p>
     */
    attributes?: Value[];
}
export declare namespace StructValue {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StructValue) => any;
}
/**
 * <p>The request parameters represent the input of a SQL statement over an array of
 *             data.</p>
 */
export interface BatchExecuteStatementRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>The name or ARN of the secret that enables access to the DB cluster.</p>
     */
    secretArn: string | undefined;
    /**
     * <p>The SQL statement to run.</p>
     */
    sql: string | undefined;
    /**
     * <p>The name of the database.</p>
     */
    database?: string;
    /**
     * <p>The name of the database schema.</p>
     */
    schema?: string;
    /**
     * <p>The parameter set for the batch operation.</p>
     *         <p>The SQL statement is executed as many times as the number of parameter sets provided.
     *           To execute a SQL statement with no parameters, use one of the following options:</p>
     *         <ul>
     *             <li>
     *                 <p>Specify one or more empty parameter sets.</p>
     *             </li>
     *             <li>
     *                 <p>Use the <code>ExecuteStatement</code> operation instead of the <code>BatchExecuteStatement</code> operation.</p>
     *             </li>
     *          </ul>
     *         <note>
     *             <p>Array parameters are not supported.</p>
     *         </note>
     */
    parameterSets?: SqlParameter[][];
    /**
     * <p>The identifier of a transaction that was started by using the
     *                 <code>BeginTransaction</code> operation. Specify the transaction ID of the
     *             transaction that you want to include the SQL statement in.</p>
     *         <p>If the SQL statement is not part of a transaction, don't set this
     *             parameter.</p>
     */
    transactionId?: string;
}
export declare namespace BatchExecuteStatementRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchExecuteStatementRequest) => any;
}
/**
 * <p>The response elements represent the output of a SQL statement over an array of
 *             data.</p>
 */
export interface BatchExecuteStatementResponse {
    /**
     * <p>The execution results of each batch entry.</p>
     */
    updateResults?: UpdateResult[];
}
export declare namespace BatchExecuteStatementResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchExecuteStatementResponse) => any;
}
/**
 * <p>A record returned by a call.</p>
 */
export interface _Record {
    /**
     * <p>The values returned in the record.</p>
     */
    values?: Value[];
}
export declare namespace _Record {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: _Record) => any;
}
/**
 * <p>The response elements represent the output of a request to run a SQL statement against
 *             a database.</p>
 */
export interface ExecuteStatementResponse {
    /**
     * <p>The records returned by the SQL statement.</p>
     */
    records?: Field[][];
    /**
     * <p>Metadata for the columns included in the results.</p>
     */
    columnMetadata?: ColumnMetadata[];
    /**
     * <p>The number of records updated by the request.</p>
     */
    numberOfRecordsUpdated?: number;
    /**
     * <p>Values for fields generated during the request.</p>
     *
     *         <note>
     *             <p>The <code>generatedFields</code> data isn't supported by Aurora PostgreSQL.
     *                 To get the values of generated fields, use the <code>RETURNING</code> clause. For
     *                 more information, see <a href="https://www.postgresql.org/docs/10/dml-returning.html">Returning Data From
     *                     Modified Rows</a> in the PostgreSQL documentation.</p>
     *         </note>
     */
    generatedFields?: Field[];
}
export declare namespace ExecuteStatementResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExecuteStatementResponse) => any;
}
/**
 * <p>The result set returned by a SQL statement.</p>
 */
export interface ResultFrame {
    /**
     * <p>The result-set metadata in the result set.</p>
     */
    resultSetMetadata?: ResultSetMetadata;
    /**
     * <p>The records in the result set.</p>
     */
    records?: _Record[];
}
export declare namespace ResultFrame {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResultFrame) => any;
}
/**
 * <p>The result of a SQL statement.</p>
 *
 *         <important>
 *             <p>This data type is deprecated.</p>
 *         </important>
 */
export interface SqlStatementResult {
    /**
     * <p>The result set of the SQL statement.</p>
     */
    resultFrame?: ResultFrame;
    /**
     * <p>The number of records updated by a SQL statement.</p>
     */
    numberOfRecordsUpdated?: number;
}
export declare namespace SqlStatementResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SqlStatementResult) => any;
}
/**
 * <p>The response elements represent the output of a request to run one or more SQL
 *             statements.</p>
 */
export interface ExecuteSqlResponse {
    /**
     * <p>The results of the SQL statement or statements.</p>
     */
    sqlStatementResults?: SqlStatementResult[];
}
export declare namespace ExecuteSqlResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExecuteSqlResponse) => any;
}
